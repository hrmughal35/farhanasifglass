"use client";

import { Copy, FileText, Trash2 } from "lucide-react";
import type { Quotation } from "../../lib/quotations/types";
import { CURRENCY_SYMBOLS } from "../../lib/quotations/types";
import { calculateTotals, formatMoney } from "../../lib/quotations/calculations";

type Props = {
  quotations: Quotation[];
  activeId: string;
  onOpen: (quotation: Quotation) => void;
  onDuplicate: (quotation: Quotation) => void;
  onDelete: (id: string) => void;
};

export default function RecentQuotations({ quotations, activeId, onOpen, onDuplicate, onDelete }: Props) {
  if (quotations.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 p-5 text-center text-sm text-slate-400">
        No saved quotations yet. Once you save one, it will appear here.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {quotations.map((q) => {
        const totals = calculateTotals(q);
        const symbol = CURRENCY_SYMBOLS[q.currency];
        const isActive = q.id === activeId;
        return (
          <div
            key={q.id}
            className={`group rounded-xl border p-3 transition ${
              isActive ? "border-[#2fb8a6] bg-[#2fb8a6]/5" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <button type="button" onClick={() => onOpen(q)} className="w-full text-left">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-800">
                  <FileText className="h-3.5 w-3.5 text-[#2fb8a6]" />
                  {q.quotationNo}
                </span>
                <span className="text-xs text-slate-400">{q.date}</span>
              </div>
              <div className="mt-1 truncate text-sm text-slate-600">
                {q.clientName || "Unnamed client"}
              </div>
              <div className="mt-1 text-sm font-semibold text-[#0a1628]">
                {symbol} {formatMoney(totals.grandTotalA)}
              </div>
            </button>
            <div className="mt-2 flex items-center gap-2 opacity-0 transition group-hover:opacity-100">
              <button
                type="button"
                onClick={() => onDuplicate(q)}
                className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-slate-100"
              >
                <Copy className="h-3.5 w-3.5" /> Duplicate
              </button>
              <button
                type="button"
                onClick={() => onDelete(q.id)}
                className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-red-500 hover:bg-red-50"
              >
                <Trash2 className="h-3.5 w-3.5" /> Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
