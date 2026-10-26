import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { format } from "@/i18n/rich";
import { AppDownloadButton } from "./AppDownload";
import { APP_STORES } from "./appStores";
import { COMPANY_LINKS, REGULATORY_LINKS, SOCIAL_LINKS } from "./siteLinks";
import StoreBadge from "./StoreBadge";
import { BrushHighlight, buttonGold, CALENDLY_URL, GoldText } from "./ui";

const gold = "bg-gradient-to-r from-[#C3A346] from-0% via-[#FEEF9C] via-50% to-[#C7AB4F] to-100%";

// Only networks with a profile URL in siteLinks.ts are shown.
const socials = (
  [
    { name: "X", icon: FaXTwitter },
    { name: "Instagram", icon: FaInstagram },
    { name: "LinkedIn", icon: FaLinkedin },
    { name: "TikTok", icon: FaTiktok },
    { name: "YouTube", icon: FaYoutube },
  ] as const
).flatMap((social) => {
  const url = SOCIAL_LINKS[social.name];
  return url ? [{ ...social, url }] : [];
});

const linkClass = "inline-flex min-h-8 items-center hover:underline";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.footer;
  const to = (path: string) => localizePath(lang, path);

  const columns = [
    {
      title: t.productTitle,
      links: [
        { label: t.product.mutualFunds, href: to("/invest") },
        { label: t.product.stocks, href: to("/invest") },
        { label: t.product.fixedIncome, href: to("/invest") },
        { label: t.product.alternatives, href: to("/invest") },
        { label: t.product.retirement, href: to("/invest") },
        { label: t.product.life, href: to("/insurance") },
        { label: t.product.incomeProtection, href: to("/insurance") },
        { label: t.product.assetCoverage, href: to("/insurance") },
      ],
    },
    {
      title: t.companyTitle,
      links: [
        { label: t.company.about, href: to("/about") },
        { label: dict.nav.contact, href: to("/contact-us") },
        { label: t.company.faq, href: to("/faq") },
        { label: dict.common.getTheApp, href: to("/download") },
        ...(["blog", "partner", "affiliates", "press", "careers"] as const).flatMap((key) => {
          const url = COMPANY_LINKS[key];
          return url ? [{ label: t.company[key], href: url }] : [];
        }),
      ],
    },
    {
      title: t.legalTitle,
      links: [
        { label: t.legal.policy, href: to("/policy") },
        { label: t.legal.terms, href: to("/terms") },
        { label: t.legal.disclosures, href: to("/disclosures") },
        { label: t.legal.privacy, href: to("/privacy") },
      ],
    },
  ];

  const regulatory = (["customerSummaries", "brokerCheck"] as const).flatMap((key) => {
    const url = REGULATORY_LINKS[key];
    return url ? [{ label: t[key], href: url }] : [];
  });

  return (
    <footer className="text-black">
      <div
        className="relative overflow-hidden bg-black bg-cover bg-center bg-no-repeat px-4 py-14 text-white sm:px-6 sm:py-20 lg:py-32"
        style={{ backgroundImage: "url('/images/footer-top.avif')" }}
      >
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-satoshi text-[28px] leading-tight font-extrabold text-balance md:text-[38px] lg:text-[48px]">
            {t.ctaTitle}
            <span className="mt-1 block sm:mt-2">
              <BrushHighlight text={t.ctaHighlight} />
            </span>
          </h2>

          <p className="mx-auto mt-5 mb-8 max-w-2xl text-lg font-light text-pretty text-[#AEB1BC] md:text-2xl">{t.ctaBody}</p>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={`${buttonGold} font-bold sm:px-8`}>
              {dict.common.bookConsultation}
              <span className="sr-only"> ({dict.common.newTab})</span>
            </a>
            <AppDownloadButton
              placement="footer_cta"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#C3A346] bg-black/60 px-6 py-3 text-base font-bold transition-colors hover:bg-black sm:px-8"
            >
              <GoldText>{dict.common.getTheApp}</GoldText>
            </AppDownloadButton>
          </div>
        </div>
      </div>

      {(regulatory.length > 0 || socials.length > 0) && (
        <div className={`${gold} border-b border-black/10 px-4 py-4 sm:px-6`}>
          <div className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-3 text-sm md:text-base ${regulatory.length ? "md:grid-cols-2" : ""}`}>
            {regulatory.length > 0 && (
            <div className="flex flex-col flex-wrap items-center justify-center gap-1 text-black md:flex-row md:justify-start md:gap-4">
              {regulatory.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={`${linkClass} underline`}>
                  {link.label}
                </a>
              ))}
            </div>
            )}

            {socials.length > 0 && (
              <div className={`flex flex-col items-center justify-center gap-1 md:flex-row ${regulatory.length ? "md:justify-start" : ""}`}>
                <span className="md:mr-2">{t.followUs}</span>
                <ul className="flex items-center">
                  {socials.map(({ name, icon: Icon, url }) => (
                    <li key={name}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={format(t.followOn, { network: name })}
                        className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-black/10"
                      >
                        <Icon className="h-5 w-5 text-black" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={`${gold} px-4 py-10 sm:px-6 md:py-12`}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 text-sm md:text-base lg:grid-cols-3">
            {columns.map((column, i) => (
              <div key={column.title} className={i === 2 ? "col-span-2 lg:col-span-1" : undefined}>
                <h3 className="mb-2 font-bold sm:mb-3">{column.title}</h3>
                <ul className="font-normal">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm leading-relaxed font-light text-black md:text-base">
            <div className="mb-6 sm:mb-8">
              <h3 className="mb-3 font-bold sm:mb-4">{t.getTheApp}</h3>
              <div className="flex flex-wrap gap-3">
                {APP_STORES.map((store) => (
                  <StoreBadge key={store.id} store={store} placement="footer_badges" labels={dict.appDownload} variant="badge" />
                ))}
              </div>
            </div>
            <p>{t.about}</p>
          </div>
        </div>
      </div>

      <div className={`${gold} flex flex-row items-center justify-center px-4 pb-6 sm:px-6 sm:pb-8`}>
        <p aria-hidden="true" className="font-sans text-[22vw] leading-none font-bold text-[#63510C] lg:text-[235.74px] 2xl:text-[335.74px]">
          fundora
        </p>
      </div>
    </footer>
  );
}
