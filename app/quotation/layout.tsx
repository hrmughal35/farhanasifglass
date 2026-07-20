import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quotation Builder | Farhan Asif Aluminium and Glass Fixing L.L.C.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function QuotationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
