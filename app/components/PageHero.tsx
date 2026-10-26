import type { CSSProperties } from "react";
import { AppDownloadButton } from "./AppDownload";
import { buttonGold, buttonLight, CALENDLY_URL, container } from "./ui";

type PageHeroProps = {
  title: string;
  subtitle: string;
  note?: string;
  primaryLabel: string;
  consultLabel: string;
  newTabLabel: string;
  image: { mobile: string; desktop: string };
};

// The photo hero every marketing page opens with: headline, supporting copy,
// the app download CTA and the consultation link.
export default function PageHero({ title, subtitle, note, primaryLabel, consultLabel, newTabLabel, image }: PageHeroProps) {
  return (
    <section
      className="page-hero relative isolate bg-black text-white"
      style={{ "--hero-mobile": `url('${image.mobile}')`, "--hero-desktop": `url('${image.desktop}')` } as CSSProperties}
    >
      {/* Keeps white text readable over bright parts of the photos. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/45 md:bg-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/30 md:to-transparent" />
      <div className={`${container} flex min-h-[540px] items-center py-14 sm:min-h-[600px] sm:py-20 lg:min-h-[680px]`}>
        <div className="hero-enter max-w-3xl space-y-6">
          <h1 className="font-satoshi text-[32px] font-extrabold leading-[1.08] text-balance min-[375px]:text-[36px] sm:text-5xl lg:text-[64px] xl:text-[72px]">
            {title}
          </h1>
          <p className="max-w-2xl text-base text-pretty text-gray-100 sm:text-lg lg:text-2xl">{subtitle}</p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
            <AppDownloadButton placement="hero" className={`${buttonLight} w-full sm:w-auto`}>
              {primaryLabel}
            </AppDownloadButton>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={`${buttonGold} w-full sm:w-auto`}>
              {consultLabel}
              <span className="sr-only"> ({newTabLabel})</span>
            </a>
          </div>
          {note && <p className="max-w-xl text-sm font-light text-pretty text-gray-200 sm:text-base">{note}</p>}
        </div>
      </div>
    </section>
  );
}
