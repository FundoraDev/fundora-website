import type { MetadataRoute } from "next";
import { languageAlternates, localizePath, locales, SITE_URL } from "@/i18n/config";

const pages: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/invest", changeFrequency: "weekly", priority: 0.9 },
  { path: "/protect", changeFrequency: "weekly", priority: 0.9 },
  { path: "/programs", changeFrequency: "weekly", priority: 0.9 },
  { path: "/insurance", changeFrequency: "weekly", priority: 0.9 },
  { path: "/download", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/policy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.4 },
  { path: "/disclosures", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.4 },
];

// Every page in every language, each listing its translations.
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority }) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localizePath(locale, path)}`,
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
