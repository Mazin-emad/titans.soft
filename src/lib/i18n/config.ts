import { siteConfig, type SiteLocale } from "@/lib/site";

export type { SiteLocale };

export const locales = siteConfig.locales;
export const defaultLocale: SiteLocale = siteConfig.localeDefault;

export function isLocale(value: string | undefined | null): value is SiteLocale {
  return value === "en" || value === "ar";
}

export const localeNames: Record<SiteLocale, string> = {
  en: "English",
  ar: "العربية",
};

export const localeDirs: Record<SiteLocale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};
