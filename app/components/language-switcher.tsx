"use client";

import { useLanguage } from "./language-provider";
import type { Language } from "../lib/i18n/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const options: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
  ];

  return (
    <div className="flex items-center rounded-sm border border-white/20 p-0.5">
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLanguage(option.code)}
          className={`rounded-sm px-2.5 py-1 text-xs font-bold transition ${
            language === option.code
              ? "bg-gold text-navy"
              : "text-white/70 hover:text-white"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
