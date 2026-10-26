import { notFound } from "next/navigation";

// Any unknown path under a locale renders that locale's 404 page (inside the
// localized layout) rather than a bare default one.
export default function CatchAll() {
  notFound();
}
