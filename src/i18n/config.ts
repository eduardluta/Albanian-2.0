export const locales = ["en", "sq", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  sq: "SQ",
  de: "DE",
};

export const localeNames: Record<Locale, string> = {
  sq: "Shqip",
  en: "English",
  de: "Deutsch",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
