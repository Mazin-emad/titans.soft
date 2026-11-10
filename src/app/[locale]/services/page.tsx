import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/layout/page-intro";
import { PageTransition } from "@/components/layout/page-transition";
import { CTA } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq-section";
import { Process } from "@/components/sections/process";
import { ServiceRows } from "@/components/sections/services-index";
import { Technologies } from "@/components/sections/technologies";
import { Container } from "@/components/ui/section";
import { services } from "@/data/services";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { tl } from "@/lib/i18n/t";
import { JsonLdScript, itemListJsonLd } from "@/lib/jsonld";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  const dict = await getDictionary(loc);
  return localizedMetadata({ locale: loc, title: dict.seo.services.title, description: dict.seo.services.description, path: "/services" });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const t = dict.services;

  return (
    <PageTransition>
      <div>
        <PageIntro
          locale={locale}
          homeLabel={dict.breadcrumbs.home}
          crumbs={[{ name: dict.nav.services, path: "/services" }]}
          meta={`${services.length} ${dict.nav.services}`}
          title={t.title}
          body={t.body}
        />
        <Container className="pb-8">
          <ServiceRows locale={locale} items={services} dict={dict} />
        </Container>
        <Process locale={locale} dict={dict} index="01" />
        <Technologies locale={locale} dict={dict} index="02" />
        <FaqSection locale={locale} dict={dict} index="03" />
        <CTA locale={locale} dict={dict} />
        <JsonLdScript data={itemListJsonLd(locale, services.map((s) => ({ name: tl(locale, s.title), path: `/services/${s.slug}` })))} />
      </div>
    </PageTransition>
  );
}
