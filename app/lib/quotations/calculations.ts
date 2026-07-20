import type { Quotation } from "./types";

function toNumber(value: string): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : 0;
}

export type QuotationTotals = {
  subtotalA: number;
  subtotalB: number;
  discountAmountA: number;
  discountAmountB: number;
  taxableA: number;
  taxableB: number;
  taxAmountA: number;
  taxAmountB: number;
  grandTotalA: number;
  grandTotalB: number;
};

export function calculateTotals(quotation: Quotation): QuotationTotals {
  const subtotalA = quotation.items.reduce((sum, item) => sum + toNumber(item.amount), 0);
  const subtotalB =
    quotation.priceMode === "dual"
      ? quotation.items.reduce((sum, item) => sum + toNumber(item.amountB), 0)
      : 0;

  const discountValue = toNumber(quotation.discount);
  const discountAmountA =
    quotation.discountType === "percent" ? (subtotalA * discountValue) / 100 : discountValue;
  const discountAmountB =
    quotation.discountType === "percent" ? (subtotalB * discountValue) / 100 : discountValue;

  const taxableA = Math.max(subtotalA - discountAmountA, 0);
  const taxableB = Math.max(subtotalB - discountAmountB, 0);

  const taxPercent = quotation.taxEnabled ? toNumber(quotation.taxPercent) : 0;
  const taxAmountA = (taxableA * taxPercent) / 100;
  const taxAmountB = (taxableB * taxPercent) / 100;

  return {
    subtotalA,
    subtotalB,
    discountAmountA,
    discountAmountB,
    taxableA,
    taxableB,
    taxAmountA,
    taxAmountB,
    grandTotalA: taxableA + taxAmountA,
    grandTotalB: taxableB + taxAmountB,
  };
}

export function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
