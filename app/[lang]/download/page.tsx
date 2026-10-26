import type { Metadata } from "next";
import Image from "next/image";
import { APP_STORES } from "../../components/appStores";
import StoreBadge from "../../components/StoreBadge";
import { container } from "../../components/ui";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLocale, type LangParams } from "@/i18n/page";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/download", dict.meta.download, dict.meta.siteName);
}

// The one link to share for the app (social bios, print, email): every visitor
// lands here and picks their store.
export default async function Download({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.download;
  const labels = dict.appDownload;

  return (
    <main className="bg-black text-white">
      <section className={`${container} flex min-h-[calc(100svh-68px)] flex-col justify-center gap-10 py-14 lg:flex-row lg:items-center lg:gap-16`}>
        <div className="flex-1 space-y-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1a1a1a]">
            <Image alt="" src="/fundora.png" width={34} height={34} />
          </div>
          <h1 className="font-satoshi text-[40px] leading-tight font-extrabold text-balance md:text-[56px] lg:text-[64px]">{t.title}</h1>
          <p className="max-w-xl text-base text-pretty text-gray-300 md:text-xl">{t.body}</p>
          <ul className="space-y-3 text-[15px] md:text-lg">
            {t.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full rounded-[24px] bg-white p-5 text-black sm:p-8 lg:max-w-[440px]">
          <h2 data-reveal className="font-satoshi text-[22px] font-extrabold sm:text-2xl">{t.chooseStore}</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {APP_STORES.map((store) => (
              <li key={store.id}>
                <StoreBadge store={store} placement="download_page" labels={labels} />
              </li>
            ))}
          </ul>
          <div className="mt-6 hidden items-center gap-4 border-t border-[#E6E8F0] pt-6 lg:flex">
            <Image
              src="/images/app-download-qr.svg"
              alt={labels.qrAlt}
              width={88}
              height={88}
              unoptimized
              className="shrink-0 rounded-lg border border-[#E6E8F0] bg-white p-2"
            />
            <p className="text-sm text-[#696F8C]">
              <span className="block font-semibold text-black">{labels.qrTitle}</span>
              {labels.qrBody}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
