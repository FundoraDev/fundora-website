import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingHomeIcon,
  ClearThinkingIcon,
  DisciplinedExecutionIcon,
  DisciplinedIcon,
  EthicalIcon,
  FutureFocusedIcon,
  HomeBusinessConsultationIcon,
  HomeConsultancyIcon,
  HomeFacapIcon,
  HomePWAIcon,
  LongTermPerspectiveIcon,
  NavigatingHomeIcon,
  PlanningHomeIcon,
  RiskAwarenessIcon,
} from "../components/svg";
import FrameworkTabs from "../components/FrameworkTabs";
import PageHero from "../components/PageHero";
import { BrushHighlight, buttonDark, CALENDLY_URL, container, GoldText, h2, sectionY } from "../components/ui";
import { localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLocale, type LangParams } from "@/i18n/page";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/", dict.meta.home, dict.meta.siteName);
}

const valueIcons = [DisciplinedIcon, EthicalIcon, FutureFocusedIcon];
const calmIcons = [DisciplinedExecutionIcon, LongTermPerspectiveIcon, RiskAwarenessIcon, ClearThinkingIcon];
const audienceCards = [
  { icon: BuildingHomeIcon, tone: "dark" },
  { icon: PlanningHomeIcon, tone: "gold" },
  { icon: NavigatingHomeIcon, tone: "dark" },
] as const;
const supportCards = [
  { icon: HomeFacapIcon, tone: "light" },
  { icon: HomePWAIcon, tone: "dark" },
  { icon: HomeConsultancyIcon, tone: "dark" },
  { icon: HomeBusinessConsultationIcon, tone: "light" },
] as const;

const goldGradient = "bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F]";
const darkGradient = "bg-gradient-to-b from-[#111111] via-[#272727] to-black";

export default async function Home({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.home;

  const pillars = [
    { ...t.framework[0], image: "/images/invest-home.avif", href: localizePath(lang, "/invest"), external: false },
    { ...t.framework[1], image: "/images/protect-home.avif", href: localizePath(lang, "/insurance"), external: false },
    { ...t.framework[2], image: "/images/advisory-home.avif", href: CALENDLY_URL, external: true },
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        note={t.heroNote}
        primaryLabel={dict.common.startJourney}
        consultLabel={dict.common.bookConsultation}
        newTabLabel={dict.common.newTab}
        image={{ mobile: "/images/home-hero-mb.avif", desktop: "/images/home-hero-dk.avif" }}
      />

      {/* Values */}
      <section className="bg-black text-white">
        <div className={`${container} flex flex-col items-center gap-10 py-14 text-center sm:gap-12 sm:py-20`}>
          <h2 data-reveal className="font-satoshi text-[22px] leading-snug font-extrabold text-balance sm:text-[28px] lg:text-[36px]">
            <BrushHighlight text={t.valuesTitle} />
          </h2>
          <ul data-reveal-children className="grid w-full max-w-4xl grid-cols-3 gap-3 text-sm font-semibold sm:text-lg lg:text-2xl">
            {t.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <li key={value} className="flex flex-col items-center gap-3">
                  <Icon className="h-9 w-9 sm:h-11 sm:w-11 lg:h-14 lg:w-14" />
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Who Fundora is for */}
      <section className="bg-white">
        <div className={`${container} ${sectionY}`}>
          <div className="mb-8 max-w-2xl sm:mb-12">
            <h2 data-reveal className={`${h2} lg:text-[56px]`}>{t.audienceTitle}</h2>
            <p className="mt-2 text-base text-[#808080] sm:text-xl lg:text-2xl">{t.audienceSubtitle}</p>
          </div>
          <ul data-reveal-children className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {t.audience.map((text, i) => {
              const { icon: Icon, tone } = audienceCards[i];
              const isGold = tone === "gold";
              return (
                <li
                  key={text}
                  className={`flex flex-col items-start justify-between gap-8 rounded-2xl border border-black/5 px-5 py-6 shadow-sm sm:min-h-[340px] lg:min-h-[400px] lg:gap-12 lg:p-8 ${
                    isGold ? goldGradient : darkGradient
                  } ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  <Icon className="h-auto w-16 max-w-full sm:w-20 lg:w-28" />
                  <p
                    className={`text-xl leading-snug font-semibold text-balance lg:text-[28px] ${
                      isGold ? "text-black" : `${goldGradient} bg-clip-text text-transparent`
                    }`}
                  >
                    {text}
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-11 items-center rounded-full px-5 text-sm font-bold lg:text-base ${
                      isGold ? `${darkGradient} text-white` : `${goldGradient} text-black`
                    }`}
                  >
                    {dict.common.bookConsultation}
                    <span className="sr-only"> ({dict.common.newTab})</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* A complete wealth framework */}
      <section className="bg-[#F5F5F5]">
        <div className={`${container} ${sectionY}`}>
          <h2 data-reveal className={`${h2} mx-auto mb-10 max-w-3xl text-center lg:mb-16`}>{t.frameworkTitle}</h2>

          <div className="lg:hidden">
            <FrameworkTabs label={t.frameworkTabs} pillars={pillars} newTabLabel={dict.common.newTab} />
          </div>

          <div data-reveal-children className="hidden gap-x-16 gap-y-20 lg:grid lg:grid-cols-2">
            {pillars.map((pillar, i) => {
              const copy = (
                <div key={`${pillar.title}-copy`} className="flex flex-col items-start justify-center">
                  <h3 className="font-satoshi mb-4 text-[32px] font-bold">{pillar.title}</h3>
                  <p className="mb-8 max-w-md text-xl text-[#696F8C]">{pillar.description}</p>
                  <ul className="mb-10 ml-5 list-disc space-y-1 text-2xl font-semibold">
                    {pillar.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {pillar.external ? (
                    <a href={pillar.href} target="_blank" rel="noopener noreferrer" className={buttonDark}>
                      <GoldText>{pillar.cta}</GoldText>
                      <span className="sr-only"> ({dict.common.newTab})</span>
                    </a>
                  ) : (
                    <Link href={pillar.href} className={buttonDark}>
                      <GoldText>{pillar.cta}</GoldText>
                    </Link>
                  )}
                </div>
              );
              const image = (
                <div key={`${pillar.title}-image`} className="group relative aspect-square overflow-hidden rounded-3xl bg-black">
                  {i === 2 && (
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/3 bg-[radial-gradient(circle_at_top,_#00DB0E_0%,_rgba(0,219,14,0)_70%)] opacity-70 blur-2xl" />
                  )}
                  <Image src={pillar.image} alt={pillar.imageAlt} fill sizes="45vw" className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]" />
                </div>
              );
              return i % 2 === 1 ? [image, copy] : [copy, image];
            })}
          </div>
        </div>
      </section>

      {/* Calm strategy */}
      <section className="bg-white text-black">
        <div className={`${container} py-12 md:py-16`}>
          <div data-reveal className="min-h-[460px] overflow-clip rounded-[20px] bg-black bg-[url('/images/calm-strategy-mobile.avif')] bg-[length:210px] bg-[right_-1.5rem_bottom] bg-no-repeat px-6 py-8 text-white sm:bg-[length:280px] md:min-h-[500px] md:rounded-[40px] md:p-10 lg:min-h-0 lg:rounded-[60px] lg:bg-[url('/images/calm-strategy.avif')] lg:bg-[length:300px] lg:bg-left lg:p-12 lg:pl-[340px]">
            <div className="flex flex-col gap-4 lg:items-end lg:text-right">
              <h2 data-reveal className="font-satoshi max-w-md text-[32px] leading-tight font-extrabold tracking-tight text-balance md:text-[44px] lg:max-w-xl lg:text-[52px]">
                {t.calmTitle}
              </h2>
              <p className="text-base md:text-xl lg:text-[22px]">{t.calmSubtitle}</p>
            </div>
            {/* Below desktop the list keeps to the left, beside the coin. */}
            <ul data-reveal-children className="mt-8 grid max-w-[55%] grid-cols-1 gap-x-6 gap-y-6 text-sm font-semibold md:grid-cols-2 md:gap-y-8 md:text-lg lg:mt-12 lg:max-w-none lg:grid-cols-4 lg:text-2xl">
              {t.calm.map((item, i) => {
                const Icon = calmIcons[i];
                return (
                  <li key={item} className="flex flex-col items-start gap-3 lg:gap-4">
                    <Icon className="h-8 w-8 md:h-10 md:w-10 lg:h-14 lg:w-14" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Structured support */}
      <section className="bg-[#F5F5F5]">
        <div className={`${container} ${sectionY}`}>
          <h2 data-reveal className={`${h2} mx-auto mb-10 max-w-3xl text-center lg:mb-14`}>{t.supportTitle}</h2>
          <ul data-reveal-children className="mx-auto grid max-w-5xl grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:gap-6">
            {t.support.map((card, i) => {
              const { icon: Icon, tone } = supportCards[i];
              return (
                <li
                  key={card.title}
                  className={`flex min-h-40 flex-col justify-between gap-6 rounded-2xl p-4 transition-transform duration-200 motion-safe:hover:-translate-y-1 hover:shadow-xl sm:p-6 md:min-h-[320px] md:rounded-[30px] md:p-8 lg:min-h-[400px] lg:p-10 ${
                    tone === "dark" ? "bg-black text-white" : "bg-white text-[#141900]"
                  }`}
                >
                  <Icon className="h-11 w-11 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20" />
                  <div className="space-y-1 md:space-y-2.5">
                    <h3 className="font-satoshi text-base leading-tight font-bold sm:text-xl md:text-[22px] lg:text-[28px] xl:text-[32px]">{card.title}</h3>
                    <p className="text-sm text-[#AEB1BC] sm:text-base md:text-lg lg:text-2xl">{card.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 flex sm:justify-center md:mt-12">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={`${buttonDark} w-full sm:w-auto`}>
              <GoldText>{dict.common.speakWithAdvisor}</GoldText>
              <span className="sr-only"> ({dict.common.newTab})</span>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white">
        <div className={`${container} ${sectionY}`}>
          <div className="mb-8 md:mb-14">
            <h2 data-reveal className={`${h2} lg:text-[56px]`}>{t.leadershipTitle}</h2>
            <p className="mt-2 text-base text-[#808080] md:text-2xl">{t.leadershipSubtitle}</p>
          </div>
          <div data-reveal-children className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
            <div className="md:order-2">
              <Image
                src="/images/seyi-abiodun-new.avif"
                alt={t.leaderAlt}
                width={672}
                height={554}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full rounded-3xl object-cover sm:rounded-[48px] lg:rounded-[80px]"
              />
            </div>
            <div className="flex flex-col items-start gap-6 md:order-1 md:gap-10">
              <div>
                <h3 className="font-satoshi text-lg font-bold tracking-wide md:text-[32px]">{t.leaderName}</h3>
                <p className="mt-1 text-base text-[#696F8C] md:text-xl">{t.leaderRole}</p>
              </div>
              <p className="text-base font-semibold text-pretty md:text-xl lg:text-2xl">{t.leaderBody}</p>
              <Link href={localizePath(lang, "/about#leadership")} className={`${buttonDark} w-full sm:w-auto`}>
                <GoldText>{t.leaderCta}</GoldText>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
