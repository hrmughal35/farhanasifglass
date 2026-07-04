"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  LANGUAGE_STORAGE_KEY,
  translations,
  type Language,
  type Translations,
} from "../lib/i18n/translations";
import LanguagePicker from "./language-picker";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [showPicker, setShowPicker] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    if (saved === "en" || saved === "fr") {
      setLanguageState(saved);
    } else {
      setShowPicker(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    setShowPicker(false);
  };

  if (!ready) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {showPicker && <LanguagePicker onSelect={setLanguage} />}
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
