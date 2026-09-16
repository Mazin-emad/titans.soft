import en, { type Dictionary } from "@/dictionaries/en";
import ar from "@/dictionaries/ar";
import type { SiteLocale } from "@/lib/site";

const dictionaries: Record<SiteLocale, Dictionary> = { en, ar };

export async function getDictionary(locale: SiteLocale): Promise<Dictionary> {
  return dictionaries[locale] ?? en;
}
