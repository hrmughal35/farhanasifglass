"use client";

import { useCallback, useEffect, useState } from "react";
import type { Quotation } from "./types";
import { deleteQuotation, loadQuotations, saveQuotation } from "./storage";

export function useQuotations() {
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setQuotations(loadQuotations());
    setHydrated(true);
  }, []);

  const upsert = useCallback((quotation: Quotation) => {
    setQuotations(saveQuotation(quotation));
  }, []);

  const remove = useCallback((id: string) => {
    setQuotations(deleteQuotation(id));
  }, []);

  return { quotations, hydrated, upsert, remove };
}
