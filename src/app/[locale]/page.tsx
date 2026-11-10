import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/layout/page-transition";
import { CTA } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq-section";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { ServicesIndex } from "@/components/sections/services-index";
import { WhyUs } from "@/components/sections/why";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  const dict = await getDictionary(loc);
  return localizedMetadata({ locale: loc, title: { absolute: dict.seo.home.title }, description: dict.seo.home.description });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <PageTransition>
      <div>
        <Hero locale={locale} dict={dict} />
        <ServicesIndex locale={locale} dict={dict} index="01" />
        <FeaturedWork locale={locale} dict={dict} index="02" />
        <WhyUs locale={locale} dict={dict} index="03" />
        <Process locale={locale} dict={dict} index="04" />
        <Industries locale={locale} dict={dict} index="05" />
        <FaqSection locale={locale} dict={dict} index="06" />
        <CTA locale={locale} dict={dict} />
      </div>
    </PageTransition>
  );
}
