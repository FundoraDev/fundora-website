// Where each version of the Fundora mobile app can be downloaded.
// A store with `url: null` is shown as "Coming Soon" everywhere on the site;
// setting its URL is all it takes to make it a live download option.
export type AppStore = {
  id: "google-play" | "app-store";
  name: string;
  platform: string;
  url: string | null;
};

export const APP_STORES: AppStore[] = [
  {
    id: "google-play",
    name: "Google Play",
    platform: "Android",
    url: "https://play.google.com/store/apps/details?id=com.fundorahq.android",
  },
  {
    id: "app-store",
    name: "App Store",
    platform: "iOS",
    // Awaiting Apple's approval. Add the App Store listing URL here once it's live.
    url: null,
  },
];

// The numeric Apple ID from the App Store listing URL (…/id1234567890). Once set,
// Safari on iPhone shows Apple's Smart App Banner on every page.
export const APP_STORE_ID: string | null = null;

// The shareable "get the app" page, for social bios, print and email.
export const DOWNLOAD_PAGE_URL = "https://fundorahq.com/download";

// public/images/app-download-qr.svg encodes storeHref(Google Play, "qr"), so a
// scan goes straight to the live Play listing. If the listing URL changes,
// regenerate it (e.g. `npx qrcode -t svg -o public/images/app-download-qr.svg "<url>"`).

// Which part of the site sent someone to a store.
export type DownloadPlacement =
  | "navbar"
  | "hero"
  | "products"
  | "contact"
  | "faq"
  | "footer_cta"
  | "footer_badges"
  | "mobile_banner"
  | "download_page"
  | "qr";

// Google Play passes `referrer` to the Play Console acquisition reports (and the
// Install Referrer API), so installs can be traced back to the placement.
export function storeHref(store: AppStore, placement: DownloadPlacement): string | null {
  if (!store.url) return null;
  if (store.id !== "google-play") return store.url;
  const referrer = new URLSearchParams({
    utm_source: "fundora_website",
    utm_medium: placement,
    utm_campaign: "app_download",
  });
  return `${store.url}&referrer=${encodeURIComponent(referrer.toString())}`;
}

export function getStore(id: AppStore["id"]): AppStore {
  return APP_STORES.find((store) => store.id === id)!;
}
