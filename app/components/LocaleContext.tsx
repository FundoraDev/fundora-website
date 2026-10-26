"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type LocaleContextValue = { lang: Locale; notFound: Dictionary["notFound"] };

const LocaleContext = createContext<LocaleContextValue | null>(null);

// For the few client pieces that render outside a page's props, such as the
// 404 page, which Next.js renders without route params.
export function LocaleProvider({ value, children }: { value: LocaleContextValue; children: React.ReactNode }) {
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
