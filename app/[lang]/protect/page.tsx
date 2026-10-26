import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLocale, type LangParams } from "@/i18n/page";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/protect", dict.meta.protect, dict.meta.siteName);
}

export default async function Protect({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.protect;

  return (
    <main className="bg-[#f5f5f5] text-black">
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        note={t.heroNote}
        primaryLabel={dict.common.startJourney}
        consultLabel={dict.common.bookConsultation}
        newTabLabel={dict.common.newTab}
        image={{ mobile: "/images/protect-hero-mb.avif", desktop: "/images/protect-hero-dk.avif" }}
      />
    </main>
  );
}
