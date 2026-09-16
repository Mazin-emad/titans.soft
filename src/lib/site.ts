/**
 * Central site configuration.
 * Replace placeholder contact values with real ones when available.
 * Nothing here is secret — do not put API keys in this file.
 */

export const siteConfig = {
  name: "Titans.Soft",
  tagline: {
    en: "Custom software, built around your business.",
    ar: "برمجيات مخصصة، مصممة حول احتياجات عملك.",
  },
  description: {
    en: "Titans.Soft designs and builds custom web, mobile, and desktop software for companies across Egypt, Saudi Arabia, and the MENA region.",
    ar: "تايتنز سوفت تصمم وتبني برمجيات مخصصة للويب والموبايل وسطح المكتب للشركات في مصر والسعودية ومنطقة الشرق الأوسط وشمال أفريقيا.",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://titans-soft.com",
  localeDefault: "en" as const,
  locales: ["en", "ar"] as const,
  contact: {
    // TODO: replace with real contact channels
    email: "hello@titans-soft.com",
    phoneDisplay: "+20 100 000 0000",
    phoneHref: "tel:+201000000000",
    whatsapp: "https://wa.me/201000000000",
    linkedin: "https://www.linkedin.com/company/titans-soft",
    github: "https://github.com/titans-soft",
    location: {
      en: "Cairo, Egypt — working across MENA",
      ar: "القاهرة، مصر — نعمل في جميع أنحاء المنطقة",
    },
  },
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];
