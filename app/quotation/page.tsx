"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileDown, FilePlus2, Loader2, Save } from "lucide-react";
import PinGate from "./components/pin-gate";
import QuotationForm from "./components/quotation-form";
import QuotationPreview from "./components/quotation-preview";
import RecentQuotations from "./components/recent-quotations";
import { useQuotations } from "../lib/quotations/use-quotations";
import { createEmptyQuotation, type Quotation } from "../lib/quotations/types";
import { generateQuotationNumber } from "../lib/quotations/storage";
import { downloadBlob, generateQuotationPdfBlob } from "../lib/quotations/pdf-generator";

export default function QuotationPage() {
  return (
    <PinGate>
      <QuotationWorkspace />
    </PinGate>
  );
}

function QuotationWorkspace() {
  const { quotations, hydrated, upsert, remove } = useQuotations();
  const [quotation, setQuotation] = useState<Quotation | null>(null);
  const [saved, setSaved] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (hydrated && !quotation) {
      setQuotation(createEmptyQuotation(generateQuotationNumber()));
    }
  }, [hydrated, quotation]);

  function handleNew() {
    setQuotation(createEmptyQuotation(generateQuotationNumber()));
    setSaved(false);
  }

  function handleSave() {
    if (!quotation) return;
    upsert(quotation);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleOpen(next: Quotation) {
    setQuotation(next);
    setSaved(false);
  }

  function handleDuplicate(source: Quotation) {
    const duplicated: Quotation = {
      ...source,
      id: crypto.randomUUID(),
      quotationNo: generateQuotationNumber(),
      date: new Date().toISOString().slice(0, 10),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      items: source.items.map((item) => ({ ...item, id: crypto.randomUUID() })),
    };
    setQuotation(duplicated);
    setSaved(false);
  }

  function handleDelete(id: string) {
    remove(id);
    if (quotation?.id === id) {
      setQuotation(createEmptyQuotation(generateQuotationNumber()));
    }
  }

  async function handleDownload() {
    if (!quotation) return;
    setDownloading(true);
    try {
      const blob = await generateQuotationPdfBlob(quotation);
      downloadBlob(blob, `${quotation.quotationNo}.pdf`);
      upsert(quotation);
    } finally {
      setDownloading(false);
    }
  }

  if (!quotation) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <Loader2 className="h-6 w-6 animate-spin text-[#2fb8a6]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/gallery/logo.png"
              alt="Farhan Asif"
              width={38}
              height={38}
              className="rounded-md"
            />
            <div>
              <p className="text-sm font-semibold text-[#0a1628]">Quotation Builder</p>
              <p className="text-xs text-slate-400">Farhan Asif Aluminium and Glass Fixing L.L.C.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100"
            >
              <ArrowLeft className="h-4 w-4" /> Site
            </Link>
            <button
              type="button"
              onClick={handleNew}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              <FilePlus2 className="h-4 w-4" /> New
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              <Save className="h-4 w-4" /> {saved ? "Saved!" : "Save"}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-1.5 rounded-lg bg-[#0a1628] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#132436] disabled:opacity-60"
            >
              {downloading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <FileDown className="h-4 w-4" />
              )}
              Download PDF
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[240px_1fr_1fr]">
        <aside className="order-3 lg:order-1">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Recent Quotations
          </h2>
          <RecentQuotations
            quotations={quotations}
            activeId={quotation.id}
            onOpen={handleOpen}
            onDuplicate={handleDuplicate}
            onDelete={handleDelete}
          />
        </aside>

        <main className="order-1 lg:order-2">
          <QuotationForm quotation={quotation} onChange={setQuotation} />
        </main>

        <div className="order-2 h-[70vh] lg:order-3 lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:self-start">
          <QuotationPreview quotation={quotation} />
        </div>
      </div>
    </div>
  );
}
