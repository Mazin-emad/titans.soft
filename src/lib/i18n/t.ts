import type { LocalizedText } from "@/data/services";
import type { SiteLocale } from "@/lib/site";

/** Pick the right language from a bilingual data field. */
export function tl(locale: SiteLocale, value: LocalizedText): string {
  return locale === "ar" ? value.ar : value.en;
}
