"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Lock } from "lucide-react";

const SESSION_KEY = "farhanasif_quotation_unlocked";
const QUOTATION_PIN = "4210";

export default function PinGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const stored = window.sessionStorage.getItem(SESSION_KEY);
    if (stored === "true") setUnlocked(true);
    setChecked(true);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (pin === QUOTATION_PIN) {
      window.sessionStorage.setItem(SESSION_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setPin("");
    }
  }

  if (!checked) return null;

  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a1628] px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#101f33] p-8 shadow-2xl"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#c9a24b]/15">
            <Lock className="h-6 w-6 text-[#e4c876]" />
          </div>
          <h1 className="text-center text-lg font-semibold text-white">Quotation Tool</h1>
          <p className="mt-1 text-center text-sm text-slate-400">
            Enter PIN to access the quotation builder
          </p>
          <input
            type="password"
            inputMode="numeric"
            autoFocus
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
              setError(false);
            }}
            className="mt-6 w-full rounded-lg border border-white/15 bg-[#0a1628] px-4 py-3 text-center text-lg tracking-[0.4em] text-white outline-none focus:border-[#2fb8a6]"
            placeholder="• • • •"
            maxLength={8}
          />
          {error && (
            <p className="mt-2 text-center text-sm text-red-400">Incorrect PIN, try again.</p>
          )}
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-[#c9a24b] py-3 text-sm font-semibold text-[#0a1628] transition hover:bg-[#e4c876]"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
