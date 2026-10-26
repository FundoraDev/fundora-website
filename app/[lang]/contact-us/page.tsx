import type { Metadata } from "next";
import { HiOutlineCalendarDays, HiOutlineDevicePhoneMobile, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";
import Link from "next/link";
import { AppDownloadButton } from "../../components/AppDownload";
import { CONTACT } from "../../components/siteLinks";
import { buttonDark, buttonGold, CALENDLY_URL, container, GoldText } from "../../components/ui";
import { localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLocale, type LangParams } from "@/i18n/page";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/contact-us", dict.meta.contact, dict.meta.siteName);
}

export default async function ContactUs({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.contact;

  return (
    <main className="bg-[#F5F5F5] text-black">
      <section className="bg-black text-white">
        <div className={`${container} py-16 sm:py-20 lg:py-24`}>
          <h1 data-reveal className="font-satoshi text-[36px] leading-tight font-extrabold sm:text-5xl lg:text-[64px]">
            {t.title}
          </h1>
          <p data-reveal className="mt-4 max-w-2xl text-base text-pretty text-gray-300 sm:text-lg lg:text-2xl">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className={`${container} py-12 sm:py-16 lg:py-20`}>
        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          <li data-reveal className="flex flex-col items-start gap-5 rounded-3xl bg-white p-6 sm:p-8 lg:p-10">
            <HiOutlineCalendarDays aria-hidden="true" className="h-10 w-10 text-[#C3A346]" />
            <div className="space-y-2">
              <h2 className="font-satoshi text-xl font-extrabold sm:text-2xl lg:text-[28px]">{t.consultTitle}</h2>
              <p className="text-base text-[#474D66] lg:text-lg">{t.consultBody}</p>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={`${buttonGold} mt-auto w-full font-bold sm:w-auto`}>
              {dict.common.bookConsultation}
              <span className="sr-only"> ({dict.common.newTab})</span>
            </a>
          </li>
          <li data-reveal className="flex flex-col items-start gap-5 rounded-3xl bg-black p-6 text-white sm:p-8 lg:p-10">
            <HiOutlineDevicePhoneMobile aria-hidden="true" className="h-10 w-10 text-[#C3A346]" />
            <div className="space-y-2">
              <h2 className="font-satoshi text-xl font-extrabold sm:text-2xl lg:text-[28px]">{t.appTitle}</h2>
              <p className="text-base text-gray-300 lg:text-lg">{t.appBody}</p>
            </div>
            <AppDownloadButton placement="contact" className={`${buttonDark} mt-auto w-full border border-[#C3A346] sm:w-auto`}>
              <GoldText>{dict.common.getTheApp}</GoldText>
            </AppDownloadButton>
          </li>
        </ul>

        <div data-reveal className="mt-4 rounded-3xl bg-white p-5 sm:p-8 md:mt-6 lg:p-10">
          <h2 className="font-satoshi text-xl font-extrabold sm:text-2xl">{t.directTitle}</h2>
          <dl className="mt-5 grid gap-5 sm:grid-cols-3">
            {[
              { icon: HiOutlineEnvelope, label: t.emailLabel, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: HiOutlinePhone, label: t.phoneLabel, value: CONTACT.phone, href: `tel:${CONTACT.phoneE164}` },
              { icon: HiOutlineMapPin, label: t.officeLabel, value: CONTACT.address },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-[#C3A346]" />
                <div className="min-w-0">
                  <dt className="text-sm font-semibold text-[#696F8C]">{label}</dt>
                  <dd className="mt-1 text-base">
                    {href ? (
                      // One unbroken line, slightly smaller on the narrowest phones so the
                      // email address always fits; 44px tall so it's easy to tap.
                      <a href={href} className="inline-flex min-h-11 items-center text-sm font-semibold whitespace-nowrap text-black underline-offset-4 hover:underline min-[375px]:text-base">
                        {value}
                      </a>
                    ) : (
                      <address className="pt-2.5 not-italic">{value}</address>
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <p data-reveal className="mt-8 text-center text-base text-[#474D66] sm:text-lg">
          {t.faqPrompt}{" "}
          <Link href={localizePath(lang, "/faq")} className="font-semibold text-black underline underline-offset-4 hover:no-underline">
            {t.faqLink}
          </Link>
        </p>
      </section>
    </main>
  );
}
