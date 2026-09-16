import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { Technologies } from "@/components/sections/technologies";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Process } from "@/components/sections/process";
import { WhyUs } from "@/components/sections/why";
import { Industries } from "@/components/sections/industries";
import { CTA } from "@/components/sections/cta";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Trust locale={locale} dict={dict} />
      <ServicesGrid locale={locale} dict={dict} compact />
      <SolutionsGrid locale={locale} dict={dict} compact />
      <Technologies locale={locale} dict={dict} />
      <FeaturedWork locale={locale} dict={dict} />
      <Process locale={locale} dict={dict} />
      <WhyUs locale={locale} dict={dict} />
      <Industries locale={locale} dict={dict} />
      <CTA locale={locale} dict={dict} />
    </>
  );
}
