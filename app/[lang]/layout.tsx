import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppDownloadProvider } from "../components/AppDownload";
import AppBanner from "../components/AppBanner";
import { APP_STORE_ID } from "../components/appStores";
import { LocaleProvider } from "../components/LocaleContext";
import { locales, SITE_URL } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale, type LangParams } from "@/i18n/page";

const aileron = localFont({
  src: [
    { path: "../font/aileron/aileron.thin.otf", weight: "100", style: "normal" },
    { path: "../font/aileron/aileron.thin-italic.otf", weight: "100", style: "italic" },
    { path: "../font/aileron/aileron.ultralight.otf", weight: "200", style: "normal" },
    { path: "../font/aileron/aileron.ultralight-italic.otf", weight: "200", style: "italic" },
    { path: "../font/aileron/aileron.light.otf", weight: "300", style: "normal" },
    { path: "../font/aileron/aileron.light-italic.otf", weight: "300", style: "italic" },
    { path: "../font/aileron/aileron.regular.otf", weight: "400", style: "normal" },
    { path: "../font/aileron/aileron.italic.otf", weight: "400", style: "italic" },
    { path: "../font/aileron/aileron.semibold.otf", weight: "600", style: "normal" },
    { path: "../font/aileron/aileron.semibold-italic.otf", weight: "600", style: "italic" },
    { path: "../font/aileron/aileron.bold.otf", weight: "700", style: "normal" },
    { path: "../font/aileron/aileron.bold-italic.otf", weight: "700", style: "italic" },
    { path: "../font/aileron/aileron.heavy.otf", weight: "800", style: "normal" },
    { path: "../font/aileron/aileron.heavy-italic.otf", weight: "800", style: "italic" },
    { path: "../font/aileron/aileron.black.otf", weight: "900", style: "normal" },
    { path: "../font/aileron/aileron.black-italic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-aileron",
});

const satoshi = localFont({
  src: [
    { path: "../font/satoshi/Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "../font/satoshi/Satoshi-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../font/satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "../font/satoshi/Satoshi-Italic.otf", weight: "400", style: "italic" },
    { path: "../font/satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "../font/satoshi/Satoshi-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../font/satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "../font/satoshi/Satoshi-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../font/satoshi/Satoshi-Black.otf", weight: "900", style: "normal" },
    { path: "../font/satoshi/Satoshi-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-satoshi",
});

// Every locale is prerendered; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.home.title,
    description: dict.meta.siteDescription,
    // Safari's Smart App Banner, once the iOS app is on the App Store.
    ...(APP_STORE_ID && { itunes: { appId: APP_STORE_ID } }),
  };
}

export default async function RootLayout({ children, params }: LangParams & { children: React.ReactNode }) {
  const lang = await resolveLocale(params);
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={`${aileron.variable} ${satoshi.variable} antialiased`}>
        <LocaleProvider value={{ lang, notFound: dict.notFound }}>
          <AppDownloadProvider labels={dict.appDownload}>
            <Navbar lang={lang} labels={{ ...dict.nav, logIn: dict.common.logIn, getTheApp: dict.common.getTheApp }} />
            <div className="pt-[68px]">{children}</div>
            <Footer lang={lang} dict={dict} />
            <AppBanner labels={dict.appDownload} />
          </AppDownloadProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
