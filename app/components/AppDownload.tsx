"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IoClose } from "react-icons/io5";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localizePath } from "@/i18n/config";
import { APP_STORES, type DownloadPlacement } from "./appStores";
import { useLocale } from "./LocaleContext";
import StoreBadge from "./StoreBadge";

type AppDownloadContextValue = {
  openAppDownload: (placement: DownloadPlacement) => void;
};

const AppDownloadContext = createContext<AppDownloadContextValue | null>(null);

export function useAppDownload() {
  const context = useContext(AppDownloadContext);
  if (!context) {
    throw new Error("useAppDownload must be used inside AppDownloadProvider");
  }
  return context;
}

// Renders the one app download modal for the whole site; any CTA opens it
// through useAppDownload or AppDownloadButton.
type AppDownloadLabels = Dictionary["appDownload"];

export function AppDownloadProvider({ labels, children }: { labels: AppDownloadLabels; children: React.ReactNode }) {
  const [openedFrom, setOpenedFrom] = useState<DownloadPlacement | null>(null);
  const openAppDownload = useCallback((placement: DownloadPlacement) => setOpenedFrom(placement), []);
  const closeAppDownload = useCallback(() => setOpenedFrom(null), []);
  const value = useMemo(() => ({ openAppDownload }), [openAppDownload]);

  return (
    <AppDownloadContext.Provider value={value}>
      {children}
      <AppDownloadModal labels={labels} openedFrom={openedFrom} onClose={closeAppDownload} />
    </AppDownloadContext.Provider>
  );
}

type AppDownloadButtonProps = {
  placement: DownloadPlacement;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

// A real link to the download page that, once the page's scripts are running,
// opens the download modal instead. So it always goes somewhere, even before
// JavaScript loads or if it fails.
export function AppDownloadButton({ placement, className, children, onClick }: AppDownloadButtonProps) {
  const { openAppDownload } = useAppDownload();
  const { lang } = useLocale();

  return (
    <a
      href={localizePath(lang, "/download")}
      aria-haspopup="dialog"
      onClick={(e) => {
        // Let modified clicks (new tab, new window) open the page as usual.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        onClick?.();
        openAppDownload(placement);
      }}
      className={`inline-flex cursor-pointer items-center justify-center ${className ?? ""}`}
    >
      {children}
    </a>
  );
}

function AppDownloadModal({
  labels,
  openedFrom,
  onClose,
}: {
  labels: AppDownloadLabels;
  openedFrom: DownloadPlacement | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pressStartedOnBackdrop = useRef(false);
  const isOpen = openedFrom !== null;

  // showModal() puts the dialog in the top layer, makes the rest of the page
  // inert, closes it on Escape and hands focus back to the CTA when it closes.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="app-download-title"
      aria-describedby="app-download-description"
      onClose={onClose}
      // The dialog box has no padding, so only a press on the backdrop targets
      // the dialog itself. Both ends of the press must land there, so a text
      // selection dragged out of the card doesn't close it.
      onPointerDown={(e) => {
        pressStartedOnBackdrop.current = e.target === e.currentTarget;
      }}
      onClick={(e) => {
        if (pressStartedOnBackdrop.current && e.target === e.currentTarget) onClose();
        pressStartedOnBackdrop.current = false;
      }}
      className="app-download-dialog m-auto w-[calc(100%-2rem)] max-w-[440px] max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-[24px] bg-white p-0 text-black shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative px-5 pt-8 pb-5 sm:px-8 sm:pt-10 sm:pb-8">
        <button
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="absolute top-4 right-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#696F8C] transition-colors hover:bg-[#F1F2F6] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C3A346]"
        >
          <IoClose className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-black">
          <Image alt="" src="/fundora.png" width={28} height={28} />
        </div>

        <h2
          id="app-download-title"
          className="font-satoshi text-[24px] leading-tight font-extrabold sm:text-[28px]"
        >
          {labels.title}
        </h2>
        <p
          id="app-download-description"
          className="mt-2 text-[14px] text-[#696F8C] sm:text-[16px]"
        >
          {labels.description}
        </p>

        <ul className="mt-6 flex flex-col gap-3">
          {APP_STORES.map((store) => (
            <li key={store.id}>
              <StoreBadge store={store} placement={openedFrom ?? "hero"} labels={labels} onSelect={onClose} />
            </li>
          ))}
        </ul>

        {/* Someone on a computer can't install the app there: let them carry it to their phone. */}
        <div className="mt-6 hidden items-center gap-4 border-t border-[#E6E8F0] pt-6 lg:flex">
          <Image
            src="/images/app-download-qr.svg"
            alt={labels.qrAlt}
            width={88}
            height={88}
            unoptimized
            className="shrink-0 rounded-lg border border-[#E6E8F0] bg-white p-2"
          />
          <p className="text-[14px] text-[#696F8C]">
            <span className="block font-semibold text-black">{labels.qrTitle}</span>
            {labels.qrBody}
          </p>
        </div>
      </div>
    </dialog>
  );
}
