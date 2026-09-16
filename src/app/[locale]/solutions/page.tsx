import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { Technologies } from "@/components/sections/technologies";
import { Industries } from "@/components/sections/industries";
import { CTA } from "@/components/sections/cta";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  return localizedMetadata({
    locale: loc,
    title: loc === "ar" ? "الحلول — تايتنز سوفت" : "Solutions — Titans.Soft",
    description:
      loc === "ar"
        ? "منصات SaaS وأنظمة ERP ومتاجر إلكترونية وحجوزات ولوحات تحكم — حلول مصممة حول سير عملك."
        : "SaaS, ERP, e-commerce, booking, dashboards — products shaped around your workflow.",
    path: "/solutions",
  });
}

export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pb-4 pt-16 sm:px-6 sm:pt-20">
          <Reveal>
            <Badge variant="brand" className="font-mono">{dict.solutions.eyebrow}</Badge>
          </Reveal>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{dict.solutions.title}</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{dict.solutions.body}</p>
        </div>
      </section>

      <SolutionsGrid locale={locale} dict={dict} />
      <Technologies locale={locale} dict={dict} />
      <Industries locale={locale} dict={dict} />
      <CTA locale={locale} dict={dict} />
    </>
  );
}
