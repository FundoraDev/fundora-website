import type { Metadata } from "next";
import Image from "next/image";
import InsuranceImageShuffler from "../../components/InsuranceImageShuffler";
import PageHero from "../../components/PageHero";
import { AndMoreInsurance, LifeInsurance, MotorInsuranceIcon, TravelInsurance } from "../../components/svg";
import { container, h2, sectionY } from "../../components/ui";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLocale, type LangParams } from "@/i18n/page";
import { format } from "@/i18n/rich";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/insurance", dict.meta.insurance, dict.meta.siteName);
}

const offeringIcons = [MotorInsuranceIcon, LifeInsurance, TravelInsurance, AndMoreInsurance];

export default async function Insurance({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.insurance;

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <style>{`
        @keyframes redefine-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .redefine-decor:hover { animation: redefine-float 3.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .redefine-decor:hover { animation: none; } }
      `}</style>

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        primaryLabel={t.heroCta}
        consultLabel={dict.common.bookConsultation}
        newTabLabel={dict.common.newTab}
        image={{ mobile: "/images/insurance-hero-sm.avif", desktop: "/images/insurance-hero-sm.avif" }}
      />

      {/* Redefining insurance */}
      <section className="relative overflow-clip bg-[#F5F5F5] text-black">
        <div className="redefine-decor absolute bottom-0 left-0 z-20 hidden h-[170px] w-[240px] lg:block xl:h-[220px] xl:w-[300px]">
          <Image src="/images/redefine-car.avif" alt="" fill aria-hidden className="object-contain object-left-bottom" sizes="300px" />
        </div>
        <div className="redefine-decor absolute top-0 right-0 z-20 hidden h-[170px] w-[240px] lg:block xl:h-[220px] xl:w-[300px]">
          <Image src="/images/redefine-umbrella.avif" alt="" fill aria-hidden className="object-contain object-right-top" sizes="300px" />
        </div>
        <div className={`${container} ${sectionY} relative z-10 flex flex-col items-center gap-8 text-center md:gap-10`}>
          <h2 data-reveal className={h2}>{t.redefiningTitle}</h2>
          <div data-reveal className="max-w-3xl space-y-4 text-base text-pretty text-[#474D66] md:text-xl lg:text-2xl">
            {t.redefining.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-white text-black">
        <div className={`${container} ${sectionY} flex flex-col gap-10 md:gap-14`}>
          <h2 data-reveal className={`${h2} text-center`}>{t.offeringsTitle}</h2>
          <div data-reveal-children className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="overflow-hidden rounded-2xl md:rounded-[30px]">
              <InsuranceImageShuffler
                alts={t.offerings.map((o) => o.imageAlt)}
                label={t.carouselLabel}
                slideLabels={t.offerings.map((o) => format(t.showSlide, { item: o.imageAlt }))}
              />
            </div>
            <ul className="md:self-center">
              {t.offerings.map((offering, i) => {
                const Icon = offeringIcons[i];
                return (
                  <li key={offering.title} className="flex items-start gap-5 border-b border-[#BFBFBF] py-6 first:pt-0 last:border-b-0 last:pb-0 md:gap-8 md:py-8">
                    <Icon className="h-10 w-10 shrink-0 md:h-14 md:w-14 lg:h-20 lg:w-20" />
                    <div className="space-y-1 md:space-y-2">
                      <h3 className="font-satoshi text-base font-extrabold md:text-2xl lg:text-[28px]">{offering.title}</h3>
                      <p className="text-sm text-[#474D66] md:text-lg lg:text-[22px]">{offering.body}</p>
                    </div>
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
