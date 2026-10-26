import type { Metadata } from "next";
import { AppDownloadButton } from "../../components/AppDownload";
import PageHero from "../../components/PageHero";
import { FixedReturnsIcon, ManagedPortfolioIcon, NairaSavingsIcon, NGNStocksIcon, TreasuryBillsIcon, USStocksIcon } from "../../components/svg";
import { buttonDark, container, GoldText, sectionY } from "../../components/ui";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLocale, type LangParams } from "@/i18n/page";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/invest", dict.meta.invest, dict.meta.siteName);
}

const productIcons = [USStocksIcon, NGNStocksIcon, TreasuryBillsIcon, NairaSavingsIcon, FixedReturnsIcon, ManagedPortfolioIcon];

export default async function Invest({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.invest;

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        note={t.heroNote}
        primaryLabel={dict.common.startJourney}
        consultLabel={dict.common.bookConsultation}
        newTabLabel={dict.common.newTab}
        image={{ mobile: "/images/invest-hero-mb.avif", desktop: "/images/invest-hero-dk.avif" }}
      />

      <section className="bg-white text-black">
        <div className={`${container} ${sectionY} flex flex-col gap-10 md:gap-12`}>
          <h2 data-reveal className="font-satoshi text-center text-lg font-bold tracking-[0.12em] text-balance uppercase sm:text-2xl md:text-[28px] lg:text-[44px]">
            {t.productsTitle}
          </h2>
          <ul data-reveal-children className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {t.products.map((product, i) => {
              const Icon = productIcons[i];
              return (
                <li
                  key={product.title}
                  className="flex flex-col gap-8 rounded-2xl border border-[#E6E8F0] bg-white p-5 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lg md:min-h-[320px] md:justify-between md:p-6 lg:min-h-[380px]"
                >
                  <div className="flex flex-col items-start gap-3 md:gap-6">
                    <Icon className="h-12 w-12" />
                    <div className="space-y-1 md:space-y-2">
                      <h3 className="text-lg font-bold md:text-2xl">{product.title}</h3>
                      <p className="text-base break-words md:text-xl lg:text-2xl">{product.body}</p>
                    </div>
                  </div>
                  <AppDownloadButton placement="products" className={`${buttonDark} w-full`}>
                    <GoldText>{t.productsCta}</GoldText>
                  </AppDownloadButton>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
