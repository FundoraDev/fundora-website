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
        className={`${aileron.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
