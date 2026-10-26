import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, localeFromPath, locales, type Locale } from "./i18n/config";

const ONE_YEAR = 60 * 60 * 24 * 365;

// Picks the best supported locale from an Accept-Language header:
// exact matches first (en-GB), then the base language (es-MX -> es).
function negotiate(header: string | null): Locale {
  if (!header) return defaultLocale;
  const wanted = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag: tag.toLowerCase(), q: q ? Number(q.trim().slice(2)) || 0 : 1 };
    })
    .filter((entry) => entry.tag && entry.q > 0)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of wanted) {
    const exact = locales.find((locale) => locale.toLowerCase() === tag);
    if (exact) return exact;
    const base = locales.find((locale) => locale.toLowerCase() === tag.split("-")[0]);
    if (base) return base;
  }
  return defaultLocale;
}

// Language redirects depend on the visitor's cookie and browser, so they must
// never be cached: a cached redirect would replay without updating the cookie
// and leave people stuck in the language they switched away from.
function redirect(url: URL) {
  const response = NextResponse.redirect(url, 307);
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

function remember(response: NextResponse, locale: Locale) {
  response.cookies.set(LOCALE_COOKIE, locale, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const pathLocale = localeFromPath(pathname);

  if (pathLocale) {
    const rest = pathname.slice(pathLocale.length + 1) || "/";

    // English lives at unprefixed URLs. /en/... records the choice (this is how
    // the language switcher selects English) and redirects to the canonical URL.
    if (pathLocale === defaultLocale) {
      return remember(redirect(new URL(rest + search, request.url)), defaultLocale);
    }

    // Normalise the case of the prefix: /EN-gb/about -> /en-GB/about.
    const prefix = pathname.split("/")[1];
    if (prefix !== pathLocale) {
      return redirect(new URL(`/${pathLocale}${rest === "/" ? "" : rest}${search}`, request.url));
    }

    // Visiting a localized URL is an explicit choice: remember it.
    const response = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE)?.value !== pathLocale) remember(response, pathLocale);
    return response;
  }

  // An unprefixed URL: send people who chose (or whose browser prefers) another
  // language to that version, and serve English otherwise.
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved) ? saved : negotiate(request.headers.get("accept-language"));

  if (locale !== defaultLocale) {
    return redirect(new URL(`/${locale}${pathname === "/" ? "" : pathname}${search}`, request.url));
  }

  const response = NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}${search}`, request.url));
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Everything except Next internals and files with an extension (images,
  // fonts, icon.png, sitemap.xml, robots.txt).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
