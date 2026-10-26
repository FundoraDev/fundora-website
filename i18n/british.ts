// UK English is the US source with British spelling, applied to every string
// so the two can never drift apart. Proper names (e.g. "Finance and Career
// Accountability Program") are left alone.
const spellings: [RegExp, string][] = [
  [/\bpersonaliz/gi, "personalis"],
  [/\bunauthoriz/gi, "unauthoris"],
  [/\bauthoriz/gi, "authoris"],
  [/\borganiz/gi, "organis"],
  [/\brecogniz/gi, "recognis"],
  [/\banalyz/gi, "analys"],
  [/\banonymiz/gi, "anonymis"],
  [/\bstandardiz/gi, "standardis"],
  [/\blicense\b/gi, "licence"],
  [/\b(?<!Accountability )program(s?)\b/gi, "programme$1"],
  [/\bcenter(s?)\b/gi, "centre$1"],
  [/\bcolor/gi, "colour"],
  [/\bbehavior/gi, "behaviour"],
  [/\bfavor/gi, "favour"],
];

function matchCase(source: string, replacement: string) {
  if (source === source.toUpperCase() && source.length > 1) return replacement.toUpperCase();
  if (source[0] === source[0].toUpperCase()) return replacement[0].toUpperCase() + replacement.slice(1);
  return replacement;
}

export function toBritish(text: string): string {
  return spellings.reduce(
    (out, [pattern, replacement]) =>
      out.replace(pattern, (match, ...groups) => {
        const replaced = replacement.replace("$1", typeof groups[0] === "string" ? groups[0] : "");
        return matchCase(match, replaced);
      }),
    text,
  );
}

export function britishize<T>(value: T): T {
  if (typeof value === "string") return toBritish(value) as T;
  if (Array.isArray(value)) return value.map(britishize) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, v]) => [key, britishize(v)])) as T;
  }
  return value;
}
