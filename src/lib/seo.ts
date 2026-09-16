import type { Metadata } from "next";
import { siteConfig, type SiteLocale } from "@/lib/site";

export function localizedMetadata({
  locale,
  title,
  description,
  path = "",
}: {
  locale: SiteLocale;
  title: string | { default: string; template: string };
  description: string;
  path?: string;
}): Metadata {
  const base = siteConfig.url.replace(/\/$/, "");
  const enUrl = `${base}/en${path}`;
  const arUrl = `${base}/ar${path}`;
  const canonical = locale === "ar" ? arUrl : enUrl;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { en: enUrl, ar: arUrl, "x-default": enUrl },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
