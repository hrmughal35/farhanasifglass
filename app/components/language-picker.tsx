"use client";

import Image from "next/image";
import { translations, type Language } from "../lib/i18n/translations";

type LanguagePickerProps = {
  onSelect: (lang: Language) => void;
};

export default function LanguagePicker({ onSelect }: LanguagePickerProps) {
  const copy = translations.en.languagePicker;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 px-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-picker-title"
        className="w-full max-w-md rounded-sm border border-gold/30 bg-white p-8 text-center shadow-2xl"
      >
        <div className="mx-auto mb-6 flex justify-center">
          <Image
            src="gallery/logo.png"
            alt="Farhan Asif"
            width={180}
            height={64}
            className="h-auto max-h-16 w-auto object-contain"
          />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          English / Français
        </p>
        <h2 id="language-picker-title" className="mt-3 font-display text-2xl font-bold text-navy">
          {copy.title}
        </h2>
        <p className="mt-2 text-sm text-gray-600">{copy.subtitle}</p>
        <p className="mt-1 text-sm text-gray-500">{translations.fr.languagePicker.subtitle}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onSelect("en")}
            className="btn-gold py-3.5 text-base"
          >
            {copy.english}
          </button>
          <button
            type="button"
            onClick={() => onSelect("fr")}
            className="rounded-sm border-2 border-navy bg-navy py-3.5 text-base font-semibold text-white transition hover:bg-navy-light"
          >
            {copy.french}
          </button>
        </div>
      </div>
    </div>
  );
}
