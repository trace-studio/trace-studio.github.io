import en from "../i18n/en.json";
import zh from "../i18n/zh.json";

export const defaultLocale = "en" as const;
export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

const strings: Record<Locale, Record<string, string>> = { en, zh };

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLang] = url.pathname.split("/");
  if (locales.includes(maybeLang as Locale)) {
    return maybeLang as Locale;
  }
  return defaultLocale;
}

export function t(locale: Locale, key: string): string {
  const value = strings[locale]?.[key];
  if (value) return value;
  // Fallback to English
  return strings.en[key] ?? key;
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return `/${locale}${clean}`;
}
