import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import {
  ChooseConsultationIcon,
  ChooseFACAPIcon,
  ChoosePWAIcon,
  Facap2Icon,
  HomeBusinessConsultationIcon,
  UnderstandHowToInvest,
} from "../../components/svg";
import { buttonDark, buttonGold, CALENDLY_URL, container, eyebrow, GoldText, h2, sectionY } from "../../components/ui";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLocale, type LangParams } from "@/i18n/page";
import { rich } from "@/i18n/rich";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/programs", dict.meta.programs, dict.meta.siteName);
}

const FACAP_REGISTRATION_URL =
  "https://linktr.ee/seyideassistant?fbclid=PAVERFWAPpS3dleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacRZT4AQkSv2qgK3gwJQR0vCEwSwMLn3FWEKVGDPg2V8dUxHmKfY9rtngyQeg_aem_aC_OJPW_VJqV1_j5f5I16w";

const idealIcons = [Facap2Icon, UnderstandHowToInvest];
const offeringImages = ["/images/programs-consultation.avif", "/images/programs-pwa.avif", "/images/programs-bc.avif"];
const chooseIcons = [ChooseConsultationIcon, ChooseFACAPIcon, ChoosePWAIcon, HomeBusinessConsultationIcon];

export default async function Programs({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.programs;

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        note={t.heroNote}
        primaryLabel={dict.common.startJourney}
        consultLabel={dict.common.bookConsultation}
        newTabLabel={dict.common.newTab}
        image={{ mobile: "/images/programs-hero-mb.avif", desktop: "/images/programs-hero-dk.avif" }}
      />

      {/* FACAP */}
      <section className="bg-[#F5F5F5] text-black">
        <div className={`${container} ${sectionY} grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16`}>
          <Image alt={t.facapAlt} src="/images/facap.avif" width={639} height={423} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full rounded-3xl md:order-2" />
          <div className="space-y-4 md:order-1 md:space-y-5">
            <h2 data-reveal className="font-satoshi text-[28px] font-extrabold md:text-[44px] lg:text-[56px]">{t.facapTitle}</h2>
            {t.facap.map((paragraph) => (
              <p key={paragraph} className="text-base text-pretty md:text-xl lg:text-2xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FACAP is ideal if... */}
      <section className="bg-white text-black">
        <div className={`${container} ${sectionY} flex flex-col gap-8 md:gap-14`}>
          <h2 data-reveal className="font-satoshi max-w-2xl text-[28px] leading-tight font-extrabold text-balance md:text-[44px] lg:text-[56px]">{t.idealTitle}</h2>
          <div data-reveal className="relative isolate flex min-h-[420px] w-full flex-col justify-end overflow-hidden rounded-2xl bg-[url('/images/facap2-mb.avif')] bg-cover bg-center px-4 py-6 text-white sm:min-h-[480px] sm:px-8 md:min-h-[560px] md:justify-center md:rounded-[60px] md:bg-[url('/images/facap2.avif')] md:px-16 md:py-20 lg:px-20">
            {/* Keeps the copy readable over the photo on small screens. */}
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/30" />
            <div className="flex max-w-xl flex-col items-start gap-5 md:gap-10">
              {t.ideal.map((item, i) => {
                const Icon = idealIcons[i];
                return (
                  <div key={item} className="flex items-center gap-4 text-base leading-snug font-extrabold md:gap-8 md:text-2xl lg:text-[28px]">
                    <Icon className="h-11 w-11 shrink-0 md:h-12 md:w-12" />
                    <p className="text-balance">{item}</p>
                  </div>
                );
              })}
              <a href={FACAP_REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className={`${buttonGold} w-full font-bold sm:w-auto`}>
                {t.idealCta}
                <span className="sr-only"> ({dict.common.newTab})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="bg-white text-black">
        <div className={`${container} flex flex-col gap-14 pb-14 sm:pb-20 md:gap-20 lg:pb-24`}>
          <h2 data-reveal className={`${h2} mx-auto max-w-3xl text-center lg:text-[56px]`}>{t.frameworkTitle}</h2>
          {t.offerings.map((offering, i) => (
            <div data-reveal key={offering.title} className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-16">
              <div className={`relative aspect-[604/629] w-full overflow-hidden rounded-[20px] sm:aspect-[4/3] md:aspect-[604/629] md:rounded-[40px] lg:rounded-[50px] ${i % 2 === 1 ? "" : "md:order-2"}`}>
                <Image src={offeringImages[i]} alt={offering.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className={`flex flex-col items-start gap-5 md:gap-8 ${i % 2 === 1 ? "" : "md:order-1"}`}>
                <div className="space-y-2 md:space-y-3">
                  <h3 className="font-satoshi text-lg font-bold tracking-wide uppercase sm:text-xl md:text-[28px] lg:text-[32px]">{offering.title}</h3>
                  <p className="text-base leading-relaxed text-[#696F8C] md:text-lg lg:text-xl">{offering.body}</p>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-base font-semibold md:text-xl lg:text-2xl">
                  {offering.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={`${buttonDark} w-full sm:w-auto`}>
                  <GoldText>{offering.cta}</GoldText>
                  <span className="sr-only"> ({dict.common.newTab})</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-white text-black">
        <div className={`${container} space-y-8 pb-14 text-center sm:pb-20 md:space-y-10 lg:pb-24`}>
          <h2 data-reveal className={`${eyebrow} text-balance`}>{t.chooseEyebrow}</h2>
          <div data-reveal className="rounded-[20px] bg-black p-6 text-white sm:p-8 md:rounded-[40px] md:p-10 lg:rounded-[60px] lg:p-12">
            <div className="mb-8 space-y-3 md:mb-12 md:text-left">
              <p className="font-satoshi text-[30px] leading-tight font-extrabold md:text-[44px] lg:text-[52px]">{t.chooseTitle}</p>
              <p className="text-base md:text-xl lg:text-[22px]">{t.chooseSubtitle}</p>
            </div>
            <ul data-reveal-children className="grid grid-cols-1 gap-8 text-base sm:grid-cols-2 md:text-lg lg:grid-cols-4 lg:text-xl">
              {t.choose.map((item, i) => {
                const Icon = chooseIcons[i];
                return (
                  <li key={item} className="flex flex-col items-center gap-3 text-center md:items-start md:gap-4 md:text-left">
                    {/* The business icon is single-colour; the others are drawn in gold. */}
                    <Icon className="h-9 w-9 text-[#D4B65A] md:h-12 md:w-12 lg:h-14 lg:w-14" />
                    <p className="max-w-xs text-balance">{rich(item, lang)}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
