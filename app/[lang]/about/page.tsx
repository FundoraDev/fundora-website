import type { Metadata } from "next";
import Image from "next/image";
import {
  ChoosePWAIcon,
  ClarityFirstIcon,
  GoodAdviceIcon,
  LongTermIcon,
  LongTermPerspectiveIcon,
  LongTermThinkingIcon,
  MultiGenerationalIcon,
  ProtectionMattersIcon,
  StructureAlwaysIcon,
  WealthIsBuiltIcon,
  WorldClassIcon,
} from "../../components/svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import PageHero from "../../components/PageHero";
import { LEADER_LINKS } from "../../components/siteLinks";
import { BrushHighlight, container, eyebrow, h2, sectionY } from "../../components/ui";
import { getDictionary } from "@/i18n/get-dictionary";
import { format } from "@/i18n/rich";
import { pageMetadata, resolveLocale, type LangParams } from "@/i18n/page";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/about", dict.meta.about, dict.meta.siteName);
}

const philosophyIcons = [WealthIsBuiltIcon, GoodAdviceIcon, LongTermIcon];
const missionIcons = [WorldClassIcon, LongTermPerspectiveIcon, ChoosePWAIcon, MultiGenerationalIcon];
const principleIcons = [ClarityFirstIcon, StructureAlwaysIcon, ProtectionMattersIcon, LongTermThinkingIcon];

export default async function About({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.about;

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        note={t.heroNote}
        primaryLabel={dict.common.startJourney}
        consultLabel={dict.common.bookConsultation}
        newTabLabel={dict.common.newTab}
        image={{ mobile: "/images/about-hero-mb.avif", desktop: "/images/about-hero-dk.avif" }}
      />

      {/* Our philosophy */}
      <section className="bg-white text-black">
        <div className={`${container} ${sectionY} flex flex-col gap-10 md:gap-14`}>
          <h2 data-reveal className={`${eyebrow} text-center`}>{t.philosophyEyebrow}</h2>
          <div data-reveal-children className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="font-satoshi mb-3 text-[28px] leading-tight font-extrabold tracking-tight text-balance md:text-[44px] lg:text-[56px]">
                {t.philosophyTitle}
              </h3>
              <p className="text-base text-[#808080] md:text-2xl">{t.philosophySubtitle}</p>
            </div>
            <div className="flex justify-center">
              <Image alt={t.philosophyAlt} src="/images/our-philosophy-vault.avif" width={345} height={321} className="h-auto w-full max-w-[320px] md:max-w-[345px]" />
            </div>
          </div>
          <ul data-reveal-children className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.philosophy.map((text, i) => {
              const Icon = philosophyIcons[i];
              return (
                <li key={text} className="flex flex-col items-start gap-4">
                  <Icon className="h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20" />
                  <p className="max-w-sm text-lg font-semibold text-balance md:text-2xl">{text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Our mission */}
      <section className="bg-white text-black">
        <div className={`${container} space-y-8 pb-14 text-center sm:pb-20 md:space-y-10`}>
          <h2 data-reveal className={eyebrow}>{t.missionEyebrow}</h2>
          <div data-reveal className="overflow-clip rounded-[20px] bg-black bg-[url('/images/our-mission-africa-mb.avif')] bg-[length:150px] bg-[position:right_bottom_1.5rem] bg-no-repeat p-6 text-left text-white sm:bg-[length:200px] md:rounded-[40px] md:bg-[url('/images/our-mission-africa.avif')] md:bg-[length:280px] md:bg-[position:top_15%_right_8%] md:p-10 lg:rounded-[60px] lg:p-12">
            <div className="mb-10 max-w-2xl space-y-4 md:mb-14 md:max-w-[60%]">
              <p className="font-satoshi text-[30px] leading-tight font-extrabold text-balance md:text-[44px] lg:text-[52px]">{t.missionTitle}</p>
              <p className="text-base md:text-xl lg:text-[22px]">{t.missionSubtitle}</p>
            </div>
            {/* On phones the list keeps to the left, beside the map. */}
            <ul data-reveal-children className="grid max-w-[58%] grid-cols-1 gap-x-6 gap-y-6 text-sm font-semibold sm:max-w-[65%] md:max-w-none md:grid-cols-2 md:gap-y-8 md:text-lg lg:grid-cols-4 lg:text-2xl">
              {t.mission.map((item, i) => {
                const Icon = missionIcons[i];
                return (
                  <li key={item} className="flex flex-col items-start gap-3 md:gap-4">
                    <Icon className="h-8 w-8 md:h-11 md:w-11 lg:h-14 lg:w-14" />
                    <span className="text-balance">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Our vision */}
      <section className="bg-white text-black">
        <div className={`${container} flex flex-col items-center gap-8 pb-14 sm:pb-20 lg:pb-24`}>
          <h2 data-reveal className={eyebrow}>{t.visionEyebrow}</h2>
          <p data-reveal className="font-satoshi max-w-5xl text-center text-[28px] leading-tight font-extrabold tracking-tight text-balance sm:text-[36px] md:text-[44px] lg:text-[60px]">
            <BrushHighlight text={t.visionTitle} variant={2} />
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-[#F5F5F5] text-black">
        <div className={`${container} ${sectionY} flex flex-col gap-10 md:gap-14`}>
          <h2 data-reveal className={`${h2} text-center`}>{t.howTitle}</h2>
          <div data-reveal-children className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl sm:min-h-[460px] md:min-h-[500px] md:rounded-[30px]">
              <Image alt={t.howAlt} src="/images/about-hww.avif" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h3 className="font-satoshi mb-3 text-xl leading-tight font-bold tracking-tight uppercase md:text-[32px]">{t.howEyebrow}</h3>
              <p className="text-base text-[#808080] md:text-2xl">{t.howSubtitle}</p>
              <ul className="mt-8 md:mt-12">
                {t.principles.map((principle, i) => {
                  const Icon = principleIcons[i];
                  return (
                    <li key={principle.title} className="flex items-start gap-5 border-b border-[#BFBFBF] py-6 first:pt-0 last:border-b-0 last:pb-0 md:gap-8 md:py-8">
                      <Icon className="h-10 w-10 shrink-0 md:h-14 md:w-14 lg:h-20 lg:w-20" />
                      <div className="space-y-1 md:space-y-2">
                        <h4 className="font-satoshi text-base font-extrabold md:text-2xl lg:text-[28px]">{principle.title}</h4>
                        <p className="text-sm text-[#474D66] md:text-lg lg:text-[22px]">{principle.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="scroll-mt-[68px] bg-white">
        <div className={`${container} ${sectionY}`}>
          <div className="mb-8 md:mb-14">
            <h2 data-reveal className={`${h2} lg:text-[56px]`}>{t.leadershipTitle}</h2>
            <p className="mt-2 text-base text-[#808080] md:text-2xl">{t.leadershipSubtitle}</p>
          </div>
          <div data-reveal-children className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
            <div className="md:order-2">
              <Image
                src="/images/seyi-abiodun-new.avif"
                alt={dict.home.leaderAlt}
                width={672}
                height={554}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full rounded-3xl object-cover sm:rounded-[48px] lg:rounded-[80px]"
              />
            </div>
            <div className="flex flex-col items-start gap-6 md:order-1 md:gap-10">
              <div>
                <h3 className="font-satoshi text-lg font-bold tracking-wide md:text-[32px]">{dict.home.leaderName}</h3>
                <p className="mt-1 text-base text-[#696F8C] md:text-xl">{dict.home.leaderRole}</p>
              </div>
              <div className="space-y-5 md:space-y-8">
                {t.leaderBio.map((paragraph) => (
                  <p key={paragraph} className="text-base font-semibold text-pretty md:text-xl lg:text-2xl">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#696F8C] md:text-base">{t.followLeader}</span>
                <ul className="flex items-center gap-2">
                  {(
                    [
                      ["Instagram", FaInstagram],
                      ["LinkedIn", FaLinkedin],
                    ] as const
                  ).map(([network, Icon]) => (
                    <li key={network}>
                      <a
                        href={LEADER_LINKS[network]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={format(t.leaderOn, { network })}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-[#FEEF9C] transition motion-safe:hover:-translate-y-0.5 hover:bg-[#1a1a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C3A346]"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
