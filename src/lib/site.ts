/**
 * Central site configuration.
 * Nothing here is secret — do not put API keys in this file.
 */

export const siteConfig = {
  name: "Titans.Soft",
  legalName: "Titans.Soft",
  tagline: {
    en: "Custom software, built around your business.",
    ar: "برمجيات مخصصة، تُبنى حول طريقة عملك.",
  },
  description: {
    en: "Titans.Soft is a software development company in Egypt building custom web, mobile and desktop software for businesses in Egypt, Saudi Arabia and the MENA region.",
    ar: "تايتنز سوفت شركة تطوير برمجيات في مصر، تبني برمجيات مخصصة للويب والجوال وسطح المكتب للشركات في مصر والسعودية ومنطقة الشرق الأوسط.",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://titans-soft.com",
  localeDefault: "en" as const,
  locales: ["en", "ar"] as const,
  contact: {
    /**
     * Real, published channels. `verified` gates the phone number in structured
     * data, so Google only ever indexes a number we actually answer.
     */
    verified: true,
    email: "titans.soft25@gmail.com",
    phoneDisplay: "+20 112 814 1970",
    phoneHref: "tel:+201128141970",
    whatsapp: "https://wa.me/201128141970",
    linkedin: "https://www.linkedin.com/company/titans-soft",
    github: "https://github.com/titans-soft",
    location: {
      en: "Cairo, Egypt — serving clients across MENA",
      ar: "القاهرة، مصر — نخدم العملاء في جميع أنحاء المنطقة",
    },
  },
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];
