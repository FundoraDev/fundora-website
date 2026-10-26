// Shared by the proxy, server components and client components, so it must
// stay free of server-only imports.

export const locales = ["en", "en-GB", "es", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

// English is served without a prefix (/about); every other locale is prefixed
// (/fr/about).
export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const SITE_URL = "https://fundorahq.com";

export const localeNames: Record<Locale, { label: string; short: string }> = {
  en: { label: "English (US)", short: "US" },
  "en-GB": { label: "English (UK)", short: "GB" },
  es: { label: "Español", short: "ES" },
  fr: { label: "Français", short: "FR" },
  de: { label: "Deutsch", short: "DE" },
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

// The locale at the start of a pathname, if there is one. Matching ignores
// case so /EN-gb/about still resolves.
export function localeFromPath(pathname: string): Locale | undefined {
  const segment = pathname.split("/")[1]?.toLowerCase();
  return locales.find((locale) => locale.toLowerCase() === segment);
}

// The pathname with any locale prefix removed: "/fr/about" -> "/about".
export function stripLocale(pathname: string): string {
  const locale = localeFromPath(pathname);
  if (!locale) return pathname || "/";
  const rest = pathname.slice(locale.length + 1);
  return rest.startsWith("/") ? rest : `/${rest}`;
}

// A site path for a locale: ("fr", "/about") -> "/fr/about", ("en", "/about") -> "/about".
// Fragments and query strings pass through untouched.
export function localizePath(locale: Locale, path: string): string {
  if (!path.startsWith("/")) return path;
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

// The address the language switcher points at. English goes through /en so the
// proxy can record the choice before redirecting to the unprefixed URL.
export function switchLocalePath(locale: Locale, path: string): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

// hreflang alternates for a page, for <head> and the sitemap.
export function languageAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = `${SITE_URL}${localizePath(locale, path)}`;
  }
  alternates["x-default"] = `${SITE_URL}${path}`;
  return alternates;
}
