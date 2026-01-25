import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const aileron = localFont({
  src: [
    {
      path: "./font/aileron/aileron.thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./font/aileron/aileron.thin-italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./font/aileron/aileron.ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./font/aileron/aileron.ultralight-italic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./font/aileron/aileron.light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/aileron/aileron.light-italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./font/aileron/aileron.regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/aileron/aileron.italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./font/aileron/aileron.semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/aileron/aileron.semibold-italic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./font/aileron/aileron.bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/aileron/aileron.bold-italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./font/aileron/aileron.heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./font/aileron/aileron.heavy-italic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./font/aileron/aileron.black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./font/aileron/aileron.black-italic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-aileron",
});

const satoshi = localFont({
  src: [
    { path: "./font/satoshi/Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "./font/satoshi/Satoshi-LightItalic.otf", weight: "300", style: "italic" },
    { path: "./font/satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "./font/satoshi/Satoshi-Italic.otf", weight: "400", style: "italic" },
    { path: "./font/satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "./font/satoshi/Satoshi-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "./font/satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "./font/satoshi/Satoshi-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "./font/satoshi/Satoshi-Black.otf", weight: "900", style: "normal" },
    { path: "./font/satoshi/Satoshi-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Fundora",
  description: "Build. Grow. Protect. Transfer Wealth With Clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aileron.variable} ${satoshi.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-[68px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
