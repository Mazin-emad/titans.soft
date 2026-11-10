import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { Providers } from "@/components/providers";
import { services } from "@/data/services";
import { fontVariables } from "@/lib/fonts";
import { Analytics } from "@/lib/analytics";
import { isLocale, localeDirs, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { tl } from "@/lib/i18n/t";
import { JsonLdScript, organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { localizedMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { themeInitScript } from "@/lib/theme-script";

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ed" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
  colorScheme: "light dark",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  const dict = await getDictionary(loc);
  return {
    ...localizedMetadata({
      locale: loc,
      title: { default: dict.seo.home.title, template: `%s | ${siteConfig.name}` },
      description: dict.seo.home.description,
    }),
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    formatDetection: { telephone: false, email: false, address: false },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
    },
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const navServices = services.map((s) => ({
    slug: s.slug,
    title: tl(locale, s.title),
    description: tl(locale, s.description),
  }));

  return (
    <html lang={locale} dir={localeDirs[locale]} className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Providers>
          <Header locale={locale} nav={dict.nav} services={navServices} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer locale={locale} dict={dict} />
          <MobileActionBar locale={locale} startLabel={dict.nav.startProject} whatsappLabel="WhatsApp" />
        </Providers>
        <Analytics />
        <JsonLdScript data={[organizationJsonLd(locale), websiteJsonLd(locale)]} />
      </body>
    </html>
  );
}
