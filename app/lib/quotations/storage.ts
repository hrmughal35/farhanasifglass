import type { Quotation } from "./types";

const STORAGE_KEY = "farhanasif_quotations_v1";
const MAX_SAVED = 50;

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function loadQuotations(): Quotation[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Quotation[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveQuotation(quotation: Quotation): Quotation[] {
  const all = loadQuotations();
  const existingIndex = all.findIndex((q) => q.id === quotation.id);
  const updated = { ...quotation, updatedAt: Date.now() };

  if (existingIndex >= 0) {
    all[existingIndex] = updated;
  } else {
    all.unshift(updated);
  }

  const sorted = all
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, MAX_SAVED);

  if (isBrowser()) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted));
  }
  return sorted;
}

export function deleteQuotation(id: string): Quotation[] {
  const all = loadQuotations().filter((q) => q.id !== id);
  if (isBrowser()) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  }
  return all;
}

export function generateQuotationNumber(): string {
  const all = loadQuotations();
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const datePart = `${yyyy}-${mm}${dd}`;

  const todaysCount = all.filter((q) => q.quotationNo.includes(datePart)).length;
  const serial = String(todaysCount + 1).padStart(2, "0");

  return `QTN-${datePart}-${serial}`;
}
