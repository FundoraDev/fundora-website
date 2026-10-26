import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { LegalDocument, LegalDocumentKey } from "@/i18n/legal/en";
import { format, rich } from "@/i18n/rich";
import { CONTACT as LEGAL_CONTACT } from "./siteLinks";

export const LEGAL_EFFECTIVE_DATE = "2026-06-29";
export const LEGAL_VERSION = "1.0";


const legalPaths: Record<LegalDocumentKey, string> = {
  privacy: "/privacy",
  terms: "/terms",
  policy: "/policy",
  disclosures: "/disclosures",
};

type Block = LegalDocument["sections"][number]["blocks"][number];

function LegalBlock({ block, lang }: { block: Block; lang: Locale }) {
  if ("h" in block) return <h3 className="pt-2 font-semibold text-black">{block.h}</h3>;
  if ("p" in block) return <p>{rich(block.p, lang)}</p>;
  if ("ul" in block) {
    return (
      <ul className="list-disc space-y-1.5 pl-5">
        {block.ul.map((item, i) => (
          <li key={i}>{rich(item, lang)}</li>
        ))}
      </ul>
    );
  }
  return (
    <ol className={`space-y-1.5 pl-5 ${block.type === "1" ? "list-decimal" : "list-[lower-alpha]"}`}>
      {block.ol.map((item, i) => (
        <li key={i}>{rich(item, lang)}</li>
      ))}
    </ol>
  );
}

type LegalPageLayoutProps = {
  kind: LegalDocumentKey;
  doc: LegalDocument;
  lang: Locale;
  labels: Dictionary["legal"];
};

export default function LegalPageLayout({ kind, doc, lang, labels }: LegalPageLayoutProps) {
  const isTranslation = !lang.startsWith("en");
  const effectiveDate = new Intl.DateTimeFormat(lang, { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${LEGAL_EFFECTIVE_DATE}T00:00:00Z`),
  );

  return (
    <main className="min-h-screen bg-[#F5F5F5] text-black">
      <section className="border-b border-[#E4E7EC] bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
          <p className="text-sm font-medium tracking-wide text-[#808080] uppercase">{labels.company}</p>
          <h1 className="font-satoshi mt-3 text-[clamp(1.375rem,7vw,2rem)] leading-tight font-extrabold text-balance md:text-[48px]">{doc.title}</h1>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#474D66] md:text-base">
            <span>
              <span className="font-semibold text-black">{labels.effectiveDate}</span> <time dateTime={LEGAL_EFFECTIVE_DATE}>{effectiveDate}</time>
            </span>
            {kind === "policy" && (
              <span>
                <span className="font-semibold text-black">{labels.version}</span> {LEGAL_VERSION}
              </span>
            )}
          </div>
          {isTranslation && (
            <p className="mt-6 rounded-xl border border-[#C3A346]/60 bg-[#FEEF9C]/25 p-4 text-sm text-[#474D66] md:text-base">
              {labels.translationNotice}{" "}
              <a href={`/en${legalPaths[kind]}`} hrefLang="en" lang="en" className="font-semibold text-black underline underline-offset-2">
                {labels.readEnglish}
              </a>
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 md:py-14">
        {doc.intro.length > 0 && (
          <div className="mb-10 space-y-4 rounded-2xl border border-[#E4E7EC] bg-white p-5 text-[15px] leading-relaxed text-[#474D66] md:p-8 md:text-[17px]">
            {doc.intro.map((block, i) => (
              <LegalBlock key={i} block={block} lang={lang} />
            ))}
          </div>
        )}

        <nav aria-label={format(labels.sections, { title: doc.title })} className="mb-10 rounded-2xl border border-[#E4E7EC] bg-white p-5 md:p-6">
          <h2 className="font-satoshi text-lg font-bold md:text-xl">{labels.contents}</h2>
          <ol className="mt-3 grid gap-x-6 text-[15px] text-[#474D66] md:grid-cols-2 md:text-base">
            {doc.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="flex min-h-10 items-center py-1 transition-colors hover:text-black hover:underline">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-6 md:space-y-8">
          {doc.sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-2xl border border-[#E4E7EC] bg-white p-5 md:p-8"
            >
              <h2 className="font-satoshi text-lg font-extrabold text-balance sm:text-xl md:text-2xl">{section.title}</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed break-words text-[#474D66] md:text-[17px]">
                {section.blocks.map((block, i) => (
                  <LegalBlock key={i} block={block} lang={lang} />
                ))}
              </div>
            </article>
          ))}
        </div>

        {kind === "policy" ? (
          <div className="mt-10 rounded-2xl border border-[#E4E7EC] bg-white p-5 md:mt-12 md:p-8">
            <p className="text-sm font-semibold tracking-wide text-[#808080] uppercase">{labels.approvedBy}</p>
            <p className="font-satoshi mt-2 text-lg font-bold md:text-xl">{labels.board}</p>
            <p className="mt-1 text-[#474D66]">{labels.company}</p>
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-[#E4E7EC] bg-white p-5 md:mt-12 md:p-8">
            <p className="text-sm font-semibold tracking-wide text-[#808080] uppercase">{doc.contactLabel}</p>
            <p className="font-satoshi mt-2 text-lg font-bold md:text-xl">{labels.company}</p>
            <div className="mt-3 space-y-1 break-words text-[#474D66]">
              <p>
                <span className="font-semibold text-black">{labels.email}</span>{" "}
                <a href={`mailto:${LEGAL_CONTACT.email}`} className="whitespace-nowrap underline underline-offset-2 hover:no-underline">
                  {LEGAL_CONTACT.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-black">{labels.address}</span> {LEGAL_CONTACT.address}
              </p>
              <p>
                <span className="font-semibold text-black">{labels.phone}</span>{" "}
                <a href={`tel:${LEGAL_CONTACT.phoneE164}`} className="whitespace-nowrap underline underline-offset-2 hover:no-underline">
                  {LEGAL_CONTACT.phone}
                </a>
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

