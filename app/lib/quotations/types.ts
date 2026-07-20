export type Currency = "AED" | "USD" | "EUR";

export type DiscountType = "flat" | "percent";

export type PriceMode = "single" | "dual";

export type QuotationItem = {
  id: string;
  description: string;
  size: string;
  amount: string;
  amountB: string;
};

export type Quotation = {
  id: string;
  quotationNo: string;
  date: string;
  validityDays: string;
  currency: Currency;
  clientName: string;
  clientPhone: string;
  clientLocation: string;
  projectRef: string;
  priceMode: PriceMode;
  optionALabel: string;
  optionBLabel: string;
  items: QuotationItem[];
  discount: string;
  discountType: DiscountType;
  taxEnabled: boolean;
  taxPercent: string;
  notes: string;
  createdAt: number;
  updatedAt: number;
};

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  AED: "AED",
  USD: "$",
  EUR: "\u20AC",
};

export function createEmptyItem(): QuotationItem {
  return {
    id: crypto.randomUUID(),
    description: "",
    size: "",
    amount: "",
    amountB: "",
  };
}

export function createEmptyQuotation(quotationNo: string): Quotation {
  const now = Date.now();
  return {
    id: crypto.randomUUID(),
    quotationNo,
    date: new Date().toISOString().slice(0, 10),
    validityDays: "15",
    currency: "AED",
    clientName: "",
    clientPhone: "",
    clientLocation: "",
    projectRef: "",
    priceMode: "single",
    optionALabel: "Glass Single",
    optionBLabel: "Glass Double",
    items: [createEmptyItem()],
    discount: "",
    discountType: "percent",
    taxEnabled: false,
    taxPercent: "5",
    notes: "50% advance payment, balance on completion. Prices valid as per validity period above.",
    createdAt: now,
    updatedAt: now,
  };
}
