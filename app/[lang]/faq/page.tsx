import type { Metadata } from "next";
import { AppDownloadButton } from "../../components/AppDownload";
import { buttonDark, buttonGold, CALENDLY_URL, container, GoldText } from "../../components/ui";
import { localizePath, SITE_URL } from "@/i18n/config";
import { getDictionary, getFaq } from "@/i18n/get-dictionary";
import { pageMetadata, resolveLocale, type LangParams } from "@/i18n/page";
import { rich } from "@/i18n/rich";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/faq", dict.meta.faq, dict.meta.siteName);
}

// Answers as plain text for structured data: **bold** and [text](/path) lose their markup.
const plain = (text: string) => text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\((\/[^)\s]*)\)/g, "$1");

export default async function Faq({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const [dict, faq] = await Promise.all([getDictionary(lang), getFaq(lang)]);

  // FAQPage structured data, so search engines can understand the questions.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    url: `${SITE_URL}${localizePath(lang, "/faq")}`,
    mainEntity: faq.groups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a.map(plain).join(" ") },
      })),
    ),
  };

  return (
    <main className="bg-[#F5F5F5] text-black">
      <script
        type="application/ld+json"
        // Escape "<" so the JSON can never close the script tag early.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <section className="bg-black text-white">
        <div className={`${container} py-16 sm:py-20 lg:py-24`}>
          <h1 className="font-satoshi text-[36px] leading-tight font-extrabold text-balance sm:text-5xl lg:text-[64px]">{faq.title}</h1>
          <p className="mt-4 max-w-2xl text-base text-pretty text-gray-300 sm:text-lg lg:text-2xl">{faq.intro}</p>

          <nav aria-label={faq.jumpTo} className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {faq.groups.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="inline-flex min-h-10 items-center rounded-full border border-white/25 px-4 text-sm transition-colors hover:border-[#C3A346] hover:text-[#FEEF9C] focus-visible:outline-2 focus-visible:outline-[#C3A346]"
                  >
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className={`${container} max-w-4xl space-y-12 py-12 sm:space-y-16 sm:py-16 lg:py-20`}>
        {faq.groups.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-24">
            <h2 id={`${group.id}-title`} data-reveal className="font-satoshi mb-4 text-2xl font-extrabold sm:mb-6 sm:text-3xl">
              {group.title}
            </h2>
            <div data-reveal-children className="space-y-3">
              {group.items.map((item) => (
                // Sharing one name makes this an exclusive accordion: opening a
                // question closes the one that was open (native, no JavaScript).
                <details key={item.q} name="faq" className="faq-item group rounded-2xl border border-[#E4E7EC] bg-white open:border-[#C3A346]/60 open:shadow-sm">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-semibold sm:px-6 sm:text-lg [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C3A346]">
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5F5F5] text-[#63510C] transition-transform duration-200 group-open:rotate-45 group-open:bg-[#FEEF9C]/60"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1Z" />
                      </svg>
                    </span>
                  </summary>
                  <div className="space-y-3 px-5 pb-5 text-[15px] leading-relaxed text-[#474D66] sm:px-6 sm:pb-6 sm:text-base">
                    {item.a.map((paragraph) => (
                      <p key={paragraph}>{rich(paragraph, lang)}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        <section data-reveal className="rounded-3xl bg-black p-6 text-white sm:p-10">
          <h2 className="font-satoshi text-2xl font-extrabold sm:text-3xl">{faq.stillTitle}</h2>
          <p className="mt-2 text-base text-gray-300 sm:text-lg">{faq.stillBody}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={`${buttonGold} w-full font-bold sm:w-auto`}>
              {dict.common.bookConsultation}
              <span className="sr-only"> ({dict.common.newTab})</span>
            </a>
            <AppDownloadButton placement="faq" className={`${buttonDark} w-full border border-[#C3A346] sm:w-auto`}>
              <GoldText>{dict.common.getTheApp}</GoldText>
            </AppDownloadButton>
          </div>
        </section>
      </div>
    </main>
  );
}
