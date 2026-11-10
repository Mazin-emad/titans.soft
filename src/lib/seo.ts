import type { Metadata } from "next";
import { siteConfig, type SiteLocale } from "@/lib/site";

const base = () => siteConfig.url.replace(/\/$/, "");

export function absoluteUrl(locale: SiteLocale, path = "") {
  return `${base()}/${locale}${path}`;
}

/**
 * Per-page metadata with canonical + hreflang alternates, Open Graph and Twitter.
 * The `[locale]/opengraph-image` file convention supplies the share image.
 */
export function localizedMetadata({
  locale,
  title,
  description,
  path = "",
  noindex = false,
  type = "website",
}: {
  locale: SiteLocale;
  title: string | { default: string; template: string } | { absolute: string };
  description: string;
  path?: string;
  noindex?: boolean;
  type?: "website" | "article";
}): Metadata {
  const canonical = absoluteUrl(locale, path);
  const ogTitle = typeof title === "string" ? title : "absolute" in title ? title.absolute : title.default;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl("en", path),
        ar: absoluteUrl("ar", path),
        "x-default": absoluteUrl("en", path),
      },
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      type,
    },
    twitter: { card: "summary_large_image", title: ogTitle, description },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}
