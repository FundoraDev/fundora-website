import { Fragment, type ReactNode } from "react";
import { localizePath, type Locale } from "./config";

// Replaces {name} placeholders: format("Show {item}", { item: "Life" }).
export function format(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

// Renders the little markup translations are allowed to carry:
// **bold** and [link text](/site/path). Site links are localized.
export function rich(text: string, locale: Locale): ReactNode {
  const parts: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      parts.push(<strong key={match.index} className="font-semibold text-inherit">{match[1]}</strong>);
    } else {
      parts.push(
        <a key={match.index} href={localizePath(locale, match[3])} className="font-semibold text-black underline underline-offset-2 hover:no-underline">
          {match[2]}
        </a>,
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.map((part, i) => <Fragment key={i}>{part}</Fragment>);
}
