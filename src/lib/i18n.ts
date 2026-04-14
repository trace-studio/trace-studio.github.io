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

/**
 * Return the equivalent path for `targetLocale`, preserving the rest
 * of the URL (route, query, hash). Handles both directions:
 *   - EN → ZH: prefixes `/zh`
 *   - ZH → EN: strips the `/zh` prefix
 *
 * Edge cases:
 *   - root path `/`  → `/zh/`
 *   - `/zh` or `/zh/` → `/`
 *   - paths with query/hash are preserved
 */
export function toggleLocalePath(currentPath: string, targetLocale: Locale): string {
  // Split off query + hash so we only mutate the pathname
  const hashIdx = currentPath.indexOf("#");
  const queryIdx = currentPath.indexOf("?");
  let cut = currentPath.length;
  if (hashIdx >= 0) cut = Math.min(cut, hashIdx);
  if (queryIdx >= 0) cut = Math.min(cut, queryIdx);
  const pathname = currentPath.slice(0, cut);
  const suffix = currentPath.slice(cut);

  // Strip any existing /<locale> prefix
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments.shift();
  }
  const basePath = "/" + segments.join("/");

  // Re-prefix for the target locale (defaultLocale has no prefix)
  const prefixed =
    targetLocale === defaultLocale
      ? basePath === "/" ? "/" : basePath
      : basePath === "/"
        ? `/${targetLocale}/`
        : `/${targetLocale}${basePath}`;

  return prefixed + suffix;
}
