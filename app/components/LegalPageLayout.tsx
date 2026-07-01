import { ReactNode } from "react";

export const LEGAL_EFFECTIVE_DATE = "29th June 2026";
export const LEGAL_VERSION = "1.0";

export const LEGAL_CONTACT = {
  email: "[Insert Email]",
  address: "[Insert Address]",
  phone: "[Insert Phone number]",
};

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageLayoutProps = {
  title: string;
  sections: LegalSection[];
  intro?: ReactNode;
  footer?: ReactNode;
  showVersion?: boolean;
  contentsLabel?: string;
};

export function LegalContactFooter({ label = "Contact" }: { label?: string }) {
  return (
    <div className="mt-10 rounded-[16px] border border-[#E4E7EC] bg-white p-5 md:mt-12 md:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#808080]">
        {label}
      </p>
      <p className="mt-2 font-satoshi text-lg font-bold md:text-xl">
        Fundora Technologies Ltd
      </p>
      <div className="mt-3 space-y-1 text-[#474D66]">
        <p>
          <span className="font-semibold text-black">Email:</span> {LEGAL_CONTACT.email}
        </p>
        <p>
          <span className="font-semibold text-black">Address:</span> {LEGAL_CONTACT.address}
        </p>
        <p>
          <span className="font-semibold text-black">Phone number:</span> {LEGAL_CONTACT.phone}
        </p>
      </div>
    </div>
  );
}

export default function LegalPageLayout({
  title,
  sections,
  intro,
  footer,
  showVersion = false,
  contentsLabel = "Contents",
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-black">
      <section className="border-b border-[#E4E7EC] bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
          <p className="text-sm font-medium uppercase tracking-wide text-[#808080]">
            Fundora Technologies Ltd
          </p>
          <h1 className="font-satoshi mt-3 text-[32px] font-extrabold leading-tight md:text-[48px]">
            {title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#474D66] md:text-base">
            <span>
              <span className="font-semibold text-black">Effective Date:</span>{" "}
              {LEGAL_EFFECTIVE_DATE}
            </span>
            {showVersion && (
              <span>
                <span className="font-semibold text-black">Version:</span> {LEGAL_VERSION}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
        {intro && (
          <div className="mb-10 rounded-[16px] border border-[#E4E7EC] bg-white p-5 text-[15px] leading-relaxed text-[#474D66] md:p-8 md:text-[17px]">
            {intro}
          </div>
        )}

        <nav
          aria-label={`${title} sections`}
          className="mb-10 rounded-[16px] border border-[#E4E7EC] bg-white p-5 md:p-6"
        >
          <h2 className="font-satoshi text-lg font-bold md:text-xl">{contentsLabel}</h2>
          <ol className="mt-4 grid gap-2 text-sm text-[#474D66] md:grid-cols-2 md:text-base">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="transition-colors hover:text-black hover:underline"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10 md:space-y-12">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-28 rounded-[16px] border border-[#E4E7EC] bg-white p-5 md:p-8"
            >
              <h2 className="font-satoshi text-xl font-extrabold md:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#474D66] md:text-[17px]">
                {section.content}
              </div>
            </article>
          ))}
        </div>

        {footer}
      </section>
    </main>
  );
}
