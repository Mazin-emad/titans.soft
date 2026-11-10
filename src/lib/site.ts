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
     * TODO(owner): replace with real channels. While `verified` is false the phone
     * number is kept out of structured data so Google never indexes a placeholder.
     */
    verified: false,
    email: "hello@titans-soft.com",
    phoneDisplay: "+20 100 000 0000",
    phoneHref: "tel:+201000000000",
    whatsapp: "https://wa.me/201000000000",
    linkedin: "https://www.linkedin.com/company/titans-soft",
    github: "https://github.com/titans-soft",
    location: {
      en: "Cairo, Egypt — serving clients across MENA",
      ar: "القاهرة، مصر — نخدم العملاء في جميع أنحاء المنطقة",
    },
  },
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];
