"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { IoClose } from "react-icons/io5";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { format } from "@/i18n/rich";
import { getStore, storeHref } from "./appStores";

const DISMISSED_KEY = "fundora:app-banner-dismissed-until";
const DISMISS_FOR_MS = 30 * 24 * 60 * 60 * 1000;
const DISMISS_EVENT = "fundora:app-banner-dismissed";

function detectPlatform(): "android" | "ios" | "other" {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  // iPadOS reports itself as a Mac, so tell them apart by touch support.
  if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) {
    return "ios";
  }
  return "other";
}

function isDismissed() {
  try {
    return Number(localStorage.getItem(DISMISSED_KEY) ?? 0) > Date.now();
  } catch {
    return false;
  }
}

function subscribeToDismissal(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(DISMISS_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(DISMISS_EVENT, onChange);
  };
}

const noSubscription = () => () => {};

// A slim, dismissible "get the app" bar for phones. It only appears on a
// platform where the app is actually live, and stays hidden for 30 days once
// dismissed. Nothing renders on the server, so it never causes a layout flash
// for desktop visitors.
export default function AppBanner({ labels }: { labels: Dictionary["appDownload"] }) {
  const platform = useSyncExternalStore(noSubscription, detectPlatform, () => null);
  const dismissed = useSyncExternalStore(subscribeToDismissal, isDismissed, () => true);

  if (dismissed || (platform !== "android" && platform !== "ios")) return null;
  const store = getStore(platform === "android" ? "google-play" : "app-store");
  const href = storeHref(store, "mobile_banner");
  if (!href) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISSED_KEY, String(Date.now() + DISMISS_FOR_MS));
    } catch {
      // Private browsing can block storage; the banner then just closes for this visit.
    }
    window.dispatchEvent(new Event(DISMISS_EVENT));
  };

  return (
    <>
      {/* Keeps the end of the footer from sitting under the fixed bar. */}
      <div aria-hidden="true" className="h-[72px] lg:hidden" />
      <aside
        aria-label={labels.bannerLabel}
        className="fixed inset-x-0 bottom-0 z-30 flex h-[72px] items-center gap-2 border-t border-white/10 bg-black px-3 pb-[env(safe-area-inset-bottom)] text-white lg:hidden"
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label={labels.bannerDismiss}
          className="-ml-1 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-gray-400 hover:text-white focus-visible:outline-2 focus-visible:outline-[#C3A346]"
        >
          <IoClose className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#1a1a1a]">
          <Image alt="" src="/fundora.png" width={24} height={24} />
        </div>
        <div className="min-w-0 flex-1 leading-tight">
          <p className="font-satoshi truncate text-[15px] font-bold">Fundora</p>
          <p className="truncate text-xs text-gray-400">{labels.bannerSubtitle}</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 shrink-0 items-center rounded-full bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] px-5 text-[14px] font-bold text-black"
        >
          {labels.bannerCta}
          <span className="sr-only"> {format(labels.bannerCtaSr, { store: store.name })}</span>
        </a>
      </aside>
    </>
  );
}
