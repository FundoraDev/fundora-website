import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Not Found",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-68px)] gap-10 bg-black text-white">
      <div className="flex flex-row justify-center items-center gap-5">
        <p className="font-extrabold text-xl">404</p>
        <div className="h-[5vh] border-white border"></div>
        <p className="text-sm font-semibold">This page could not be found.</p>
      </div>
      <Link
        href="/"
        className="border border-white p-2 rounded-lg text-[12px] font-light hover:font-semibold hover:border-2"
      >
        Go Home
      </Link>
    </div>
  );
}
