import { pdf } from "@react-pdf/renderer";
import { createElement } from "react";
import type { Quotation } from "./types";
import QuotationPdfDocument from "../../quotation/components/quotation-pdf-document";

export function getLogoSrc(): string {
  if (typeof window === "undefined") return "/gallery/logo.png";
  return `${window.location.origin}/gallery/logo.png`;
}

export async function generateQuotationPdfBlob(quotation: Quotation): Promise<Blob> {
  const docElement = createElement(QuotationPdfDocument, {
    quotation,
    logoSrc: getLogoSrc(),
  });
  const instance = pdf(docElement as Parameters<typeof pdf>[0]);
  return instance.toBlob();
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
