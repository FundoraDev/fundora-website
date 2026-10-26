import { FaApple, FaGooglePlay } from "react-icons/fa6";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { format } from "@/i18n/rich";
import { storeHref, type AppStore, type DownloadPlacement } from "./appStores";

const storeIcons: Record<AppStore["id"], React.ComponentType<{ className?: string }>> = {
  "google-play": FaGooglePlay,
  "app-store": FaApple,
};

export type StoreLabels = Pick<
  Dictionary["appDownload"],
  "googlePlayEyebrow" | "appStoreEyebrow" | "available" | "comingSoon" | "platformApp" | "unavailable" | "unavailableSr" | "linkSr"
>;

type StoreBadgeProps = {
  store: AppStore;
  placement: DownloadPlacement;
  labels: StoreLabels;
  // "card" is the full-width option used in the download modal and page;
  // "badge" is the compact store badge used in the footer.
  variant?: "card" | "badge";
  onSelect?: () => void;
};

// A store option: a link to the listing when the app is live there, otherwise a
// clearly unavailable "Coming Soon" tile that goes nowhere.
export default function StoreBadge({ store, placement, labels, variant = "card", onSelect }: StoreBadgeProps) {
  const Icon = storeIcons[store.id];
  const href = storeHref(store, placement);
  const eyebrow = store.id === "google-play" ? labels.googlePlayEyebrow : labels.appStoreEyebrow;
  const platform = { platform: store.platform };

  if (variant === "badge") {
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onSelect}
          className="inline-flex h-[52px] items-center gap-2.5 rounded-xl bg-black pr-4 pl-3 text-white transition-colors hover:bg-[#1a1a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
          <span className="flex flex-col text-left leading-tight">
            <span className="text-[11px] tracking-wide uppercase">{eyebrow}</span>
            <span className="font-satoshi text-[17px] font-bold whitespace-nowrap">{store.name}</span>
          </span>
          <span className="sr-only">, {format(labels.linkSr, platform)}</span>
        </a>
      );
    }

    return (
      <div className="inline-flex h-[52px] items-center gap-2.5 rounded-xl border border-black/25 bg-white/30 pr-4 pl-3 text-black/60">
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[11px] font-semibold tracking-wide text-[#63510C] uppercase">{labels.comingSoon}</span>
          <span className="font-satoshi text-[17px] font-bold whitespace-nowrap">{store.name}</span>
        </span>
        <span className="sr-only">: {format(labels.unavailableSr, platform)}</span>
      </div>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onSelect}
        className="flex items-center gap-3 rounded-2xl bg-black px-4 py-4 text-white transition-colors hover:bg-[#1a1a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C3A346] sm:gap-4 sm:px-5"
      >
        <Icon className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" aria-hidden="true" />
        <span className="flex min-w-0 flex-1 flex-col text-left leading-tight">
          <span className="text-xs tracking-wide text-gray-300 uppercase">{eyebrow}</span>
          <span className="font-satoshi text-[18px] font-bold whitespace-nowrap sm:text-[20px]">{store.name}</span>
        </span>
        <span className="shrink-0 rounded-full bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] px-2.5 py-1 text-xs font-semibold text-black sm:px-3">
          {labels.available}
        </span>
        <span className="sr-only">, {format(labels.linkSr, platform)}</span>
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-[#E6E8F0] bg-[#F9FAFC] px-4 py-4 sm:px-5">
      {/* The badge drops below the name when a long translation needs the room. */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <Icon className="h-6 w-6 shrink-0 text-black/40 sm:h-7 sm:w-7" aria-hidden="true" />
        <span className="flex min-w-[8.5rem] flex-1 flex-col text-left leading-tight">
          <span className="text-xs text-[#696F8C]">{format(labels.platformApp, platform)}</span>
          <span className="font-satoshi text-[18px] font-bold whitespace-nowrap text-black/50 sm:text-[20px]">{store.name}</span>
        </span>
        <span className="shrink-0 rounded-full border border-[#C3A346] bg-[#FEEF9C]/40 px-2.5 py-1 text-xs font-semibold text-[#63510C] sm:px-3">
          {labels.comingSoon}
        </span>
      </div>
      <p className="mt-3 text-[13px] text-[#696F8C]">{format(labels.unavailable, platform)}</p>
    </div>
  );
}
