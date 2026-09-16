import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  return localizedMetadata({
    locale: loc,
    title: loc === "ar" ? "خدماتنا — تايتنز سوفت" : "Services — Titans.Soft",
    description:
      loc === "ar"
        ? "تطوير ويب وموبايل وسطح مكتب وأنظمة مخصصة وواجهات API وذكاء اصطناعي — خدمات برمجية متكاملة."
        : "Web, mobile, desktop, custom systems, APIs, and AI — end-to-end software services.",
    path: "/services",
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pb-4 pt-16 sm:px-6 sm:pt-20">
          <Reveal>
            <Badge variant="brand" className="font-mono">{dict.services.eyebrow}</Badge>
          </Reveal>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{dict.services.title}</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{dict.services.body}</p>
        </div>
      </section>

      <ServicesGrid locale={locale} dict={dict} />
      <Process locale={locale} dict={dict} />

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <Reveal>
            <p className="text-lg font-medium">{dict.services.buildForYou}</p>
            <Button asChild variant="brand" size="lg" className="mt-4">
              <Link href={`/${locale}/contact`}>
                {dict.services.buildForYouCta}
                <ArrowUpRight className="size-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CTA locale={locale} dict={dict} />
    </>
  );
}
