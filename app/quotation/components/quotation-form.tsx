"use client";

import { Plus, Trash2 } from "lucide-react";
import type { Currency, Quotation } from "../../lib/quotations/types";
import { createEmptyItem } from "../../lib/quotations/types";

type Props = {
  quotation: Quotation;
  onChange: (next: Quotation) => void;
};

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#2fb8a6] focus:ring-1 focus:ring-[#2fb8a6]";
const labelClass = "mb-1 block text-xs font-medium text-slate-500";

export default function QuotationForm({ quotation, onChange }: Props) {
  function update<K extends keyof Quotation>(key: K, value: Quotation[K]) {
    onChange({ ...quotation, [key]: value });
  }

  function updateItem(id: string, patch: Partial<Quotation["items"][number]>) {
    onChange({
      ...quotation,
      items: quotation.items.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    });
  }

  function addItem() {
    onChange({ ...quotation, items: [...quotation.items, createEmptyItem()] });
  }

  function removeItem(id: string) {
    if (quotation.items.length === 1) return;
    onChange({ ...quotation, items: quotation.items.filter((item) => item.id !== id) });
  }

  const isDual = quotation.priceMode === "dual";

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Quotation Details
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          <div className="col-span-2">
            <label className={labelClass}>Quotation No.</label>
            <input className={`${inputClass} text-sm`} value={quotation.quotationNo} readOnly />
          </div>
          <div>
            <label className={labelClass}>Date</label>
            <input
              type="date"
              className={inputClass}
              value={quotation.date}
              onChange={(e) => update("date", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Valid For (days)</label>
            <input
              type="number"
              min="0"
              className={inputClass}
              value={quotation.validityDays}
              onChange={(e) => update("validityDays", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Currency</label>
            <select
              className={inputClass}
              value={quotation.currency}
              onChange={(e) => update("currency", e.target.value as Currency)}
            >
              <option value="AED">AED</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Client Information
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Client Name</label>
            <input
              className={inputClass}
              value={quotation.clientName}
              onChange={(e) => update("clientName", e.target.value)}
              placeholder="e.g. Ahmed Khan"
            />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input
              className={inputClass}
              value={quotation.clientPhone}
              onChange={(e) => update("clientPhone", e.target.value)}
              placeholder="e.g. +971 5X XXX XXXX"
            />
          </div>
          <div>
            <label className={labelClass}>Location</label>
            <input
              className={inputClass}
              value={quotation.clientLocation}
              onChange={(e) => update("clientLocation", e.target.value)}
              placeholder="e.g. Deira, Dubai"
            />
          </div>
          <div>
            <label className={labelClass}>Project Reference</label>
            <input
              className={inputClass}
              value={quotation.projectRef}
              onChange={(e) => update("projectRef", e.target.value)}
              placeholder="e.g. Villa 12 - Glass Facade"
            />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Line Items
          </h2>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={isDual}
              onChange={(e) => update("priceMode", e.target.checked ? "dual" : "single")}
              className="h-4 w-4 rounded border-slate-300 text-[#2fb8a6] focus:ring-[#2fb8a6]"
            />
            Compare two price options (e.g. Single / Double Glass)
          </label>
        </div>

        {isDual && (
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Option A Label</label>
              <input
                className={inputClass}
                value={quotation.optionALabel}
                onChange={(e) => update("optionALabel", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Option B Label</label>
              <input
                className={inputClass}
                value={quotation.optionBLabel}
                onChange={(e) => update("optionBLabel", e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
                <th className="w-8 pb-2">#</th>
                <th className="pb-2">Description / Scope of Work</th>
                <th className="w-28 pb-2">Size (cm)</th>
                <th className="w-28 pb-2 text-right">
                  {isDual ? quotation.optionALabel : `Amount`}
                </th>
                {isDual && <th className="w-28 pb-2 text-right">{quotation.optionBLabel}</th>}
                <th className="w-8 pb-2" />
              </tr>
            </thead>
            <tbody>
              {quotation.items.map((item, index) => (
                <tr key={item.id} className="border-t border-slate-100">
                  <td className="py-2 text-slate-500">{index + 1}</td>
                  <td className="py-2 pr-2">
                    <textarea
                      className={`${inputClass} min-h-[38px] resize-none`}
                      value={item.description}
                      onChange={(e) => updateItem(item.id, { description: e.target.value })}
                      placeholder="e.g. Supply and fixing of aluminium sliding window"
                      rows={1}
                    />
                  </td>
                  <td className="py-2 pr-2">
                    <input
                      className={inputClass}
                      value={item.size}
                      onChange={(e) => updateItem(item.id, { size: e.target.value })}
                      placeholder="e.g. 110 x 240"
                    />
                  </td>
                  <td className="py-2 pr-2">
                    <input
                      type="number"
                      className={`${inputClass} text-right`}
                      value={item.amount}
                      onChange={(e) => updateItem(item.id, { amount: e.target.value })}
                      placeholder="0.00"
                    />
                  </td>
                  {isDual && (
                    <td className="py-2 pr-2">
                      <input
                        type="number"
                        className={`${inputClass} text-right`}
                        value={item.amountB}
                        onChange={(e) => updateItem(item.id, { amountB: e.target.value })}
                        placeholder="0.00"
                      />
                    </td>
                  )}
                  <td className="py-2 text-center">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="rounded p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-500 disabled:opacity-30"
                      disabled={quotation.items.length === 1}
                      aria-label="Remove row"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          type="button"
          onClick={addItem}
          className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm font-medium text-slate-600 hover:border-[#2fb8a6] hover:text-[#2fb8a6]"
        >
          <Plus className="h-4 w-4" /> Add Row
        </button>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Discount &amp; Tax
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <label className={labelClass}>Discount</label>
            <input
              type="number"
              min="0"
              className={inputClass}
              value={quotation.discount}
              onChange={(e) => update("discount", e.target.value)}
              placeholder="0"
            />
          </div>
          <div>
            <label className={labelClass}>Discount Type</label>
            <select
              className={inputClass}
              value={quotation.discountType}
              onChange={(e) => update("discountType", e.target.value as Quotation["discountType"])}
            >
              <option value="percent">Percent (%)</option>
              <option value="flat">Flat Amount</option>
            </select>
          </div>
          <div className="flex items-end pb-1.5">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={quotation.taxEnabled}
                onChange={(e) => update("taxEnabled", e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-[#2fb8a6] focus:ring-[#2fb8a6]"
              />
              Apply VAT
            </label>
          </div>
          <div>
            <label className={labelClass}>VAT %</label>
            <input
              type="number"
              min="0"
              className={inputClass}
              value={quotation.taxPercent}
              onChange={(e) => update("taxPercent", e.target.value)}
              disabled={!quotation.taxEnabled}
            />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Terms &amp; Notes
        </h2>
        <textarea
          className={`${inputClass} min-h-[80px]`}
          value={quotation.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </section>
    </div>
  );
}
