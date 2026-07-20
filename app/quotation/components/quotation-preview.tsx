"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import type { Quotation } from "../../lib/quotations/types";
import { generateQuotationPdfBlob } from "../../lib/quotations/pdf-generator";

export default function QuotationPreview({ quotation }: { quotation: Quotation }) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const urlRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const blob = await generateQuotationPdfBlob(quotation);
        if (cancelled) return;
        const url = URL.createObjectURL(blob);
        if (urlRef.current) URL.revokeObjectURL(urlRef.current);
        urlRef.current = url;
        setPreviewUrl(url);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 450);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [quotation]);

  useEffect(() => {
    return () => {
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    };
  }, []);

  return (
    <div className="relative h-full min-h-[600px] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-100/70">
          <Loader2 className="h-6 w-6 animate-spin text-[#2fb8a6]" />
        </div>
      )}
      {previewUrl ? (
        <iframe title="Quotation preview" src={previewUrl} className="h-full w-full" />
      ) : (
        <div className="flex h-full items-center justify-center text-sm text-slate-400">
          Generating preview…
        </div>
      )}
    </div>
  );
}
