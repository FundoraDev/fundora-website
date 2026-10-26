import type { Metadata } from "next";
import LegalPageLayout from "../../components/LegalPageLayout";
import { getDictionary, getLegalDocuments } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLocale, type LangParams } from "@/i18n/page";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const [dict, legal] = await Promise.all([getDictionary(lang), getLegalDocuments(lang)]);
  const doc = legal.terms;
  return pageMetadata(lang, "/terms", { title: doc.metaTitle, description: doc.description }, dict.meta.siteName);
}

export default async function TermsPage({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const [dict, legal] = await Promise.all([getDictionary(lang), getLegalDocuments(lang)]);
  return <LegalPageLayout kind="terms" doc={legal.terms} lang={lang} labels={dict.legal} />;
}
