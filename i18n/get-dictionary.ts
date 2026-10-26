import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";
import type { LegalDocuments } from "./legal/en";
import type { Faq } from "./faq/en";
import { britishize } from "./british";

// Loaded on the server only: dictionaries never reach the client bundle, and
// client components receive just the strings they render as props.
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  "en-GB": () => import("./dictionaries/en").then((m) => britishize<Dictionary>(m.default)),
  es: () => import("./dictionaries/es").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  de: () => import("./dictionaries/de").then((m) => m.default),
};

const legalDocuments: Record<Locale, () => Promise<LegalDocuments>> = {
  en: () => import("./legal/en").then((m) => m.default),
  "en-GB": () => import("./legal/en").then((m) => britishize<LegalDocuments>(m.default)),
  es: () => import("./legal/es").then((m) => m.default),
  fr: () => import("./legal/fr").then((m) => m.default),
  de: () => import("./legal/de").then((m) => m.default),
};

const faqs: Record<Locale, () => Promise<Faq>> = {
  en: () => import("./faq/en").then((m) => m.default),
  "en-GB": () => import("./faq/en").then((m) => britishize<Faq>(m.default)),
  es: () => import("./faq/es").then((m) => m.default),
  fr: () => import("./faq/fr").then((m) => m.default),
  de: () => import("./faq/de").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
export const getFaq = (locale: Locale) => faqs[locale]();
export const getLegalDocuments = (locale: Locale) => legalDocuments[locale]();
