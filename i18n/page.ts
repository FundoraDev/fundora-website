import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, languageAlternates, localizePath, SITE_URL, type Locale } from "./config";

export type LangParams = { params: Promise<{ lang: string }> };

// The locale for a page, or a 404 for an unsupported one.
export async function resolveLocale(params: LangParams["params"]): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

const openGraphLocale: Record<Locale, string> = {
  en: "en_US",
  "en-GB": "en_GB",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
};

// Title, description, canonical URL, hreflang alternates and Open Graph tags
// for one page in one locale.
export function pageMetadata(
  lang: Locale,
  path: string,
  meta: { title: string; description: string },
  siteName: string,
): Metadata {
  const url = `${SITE_URL}${localizePath(lang, path)}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName,
      locale: openGraphLocale[lang],
      type: "website",
    },
  };
}
