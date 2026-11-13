import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/layout/page-intro";
import { PageTransition } from "@/components/layout/page-transition";
import { ProjectCard } from "@/components/portfolio/project-card";
import { CTA } from "@/components/sections/cta";
import { Process } from "@/components/sections/process";
import { ServiceRows } from "@/components/sections/services-index";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/ui/faq";
import { Section, SectionHeader } from "@/components/ui/section";
import { projects } from "@/data/projects";
import { getService, services } from "@/data/services";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { tl } from "@/lib/i18n/t";
import { JsonLdScript, serviceJsonLd } from "@/lib/jsonld";
import { localizedMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) => services.map((s) => ({ locale, slug: s.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  const s = getService(slug);
  if (!s) return {};
  return localizedMetadata({ locale: loc, title: tl(loc, s.seo.title), description: tl(loc, s.seo.description), path: `/services/${s.slug}` });
}

/** Loose mapping from a service to related projects by platform/category. */
function relatedProjects(slug: string) {
  const match: Record<string, (p: (typeof projects)[number]) => boolean> = {
    "web-development": (p) => p.platform.includes("Web"),
    "mobile-app-development": (p) => p.platform.includes("Mobile"),
    "desktop-software-development": (p) => p.platform === "Desktop",
    "custom-software-development": (p) => ["E-commerce", "EdTech", "ERP / Business Systems", "Healthcare"].includes(p.category.en),
    "api-backend-development": (p) => p.technologies.some((t) => t.includes(".NET") || t.includes("Node.js")),
    "ai-automation": (p) => p.platform === "AI Feature",
  };
  return projects.filter(match[slug] ?? (() => false)).slice(0, 2);
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const s = getService(slug);
  if (!s) notFound();
  const dict = await getDictionary(locale);
  const t = dict.services;
  const title = tl(locale, s.title);
  const n = String(services.indexOf(s) + 1).padStart(2, "0");
  const faqs = s.faqs.map((f) => ({ q: tl(locale, f.q), a: tl(locale, f.a) }));
  const others = services.filter((o) => o.slug !== s.slug);
  const related = relatedProjects(s.slug);

  return (
    <PageTransition>
      <div>
        <PageIntro
          locale={locale}
          homeLabel={dict.breadcrumbs.home}
          crumbs={[
            { name: dict.nav.services, path: "/services" },
            { name: title, path: `/services/${s.slug}` },
          ]}
          meta={`${dict.nav.services} — ${n} / ${String(services.length).padStart(2, "0")}`}
          title={title}
          body={tl(locale, s.intro)}
        >
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={`/${locale}/contact`}>
                {dict.nav.startProject}
                <Arrow />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`/${locale}/work`}>{dict.hero.secondaryCta}</Link>
            </Button>
          </div>
        </PageIntro>

        <Section labelledBy="deliverables-title" className="pt-0 sm:pt-0 lg:pt-0">
          <SectionHeader id="deliverables-title" index="01" label={t.deliverablesTitle} title={t.deliverablesTitle} />
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8 lg:col-start-4">
              {s.deliverables.map((d, i) => (
                <li key={d.en} className="reveal flex items-baseline gap-4 border-b border-rule py-5">
                  <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="heading text-lg">{tl(locale, d)}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-14 grid gap-6 border-t border-rule-strong pt-5 lg:grid-cols-12 lg:gap-8">
            <p className="label text-muted lg:col-span-3">{t.stackTitle}</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:col-span-9" dir="ltr">
              {s.tags.map((tag) => (
                <li key={tag} className="mono text-xl font-medium sm:text-2xl">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Process locale={locale} dict={dict} index="02" />

        {related.length > 0 ? (
          <Section labelledBy="related-title">
            <SectionHeader id="related-title" index="03" label={dict.work.eyebrow} title={dict.work.title} />
            <ul className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
              {related.map((p) => (
                <li key={p.slug} className="reveal">
                  <ProjectCard project={p} locale={locale} dict={dict} />
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        <Section labelledBy="service-faq-title">
          <SectionHeader id="service-faq-title" index="04" label={dict.faq.eyebrow} title={t.faqTitle} />
          <div className="mt-14 lg:ms-[25%]">
            <Faq items={faqs} name="service-faq" />
          </div>
        </Section>

        <Section labelledBy="other-services-title" className="pt-0 sm:pt-0 lg:pt-0">
          <SectionHeader id="other-services-title" index="05" label={t.otherServices} title={t.otherServices} />
          <div className="mt-12">
            <ServiceRows locale={locale} items={others} dict={dict} />
          </div>
        </Section>

        <CTA locale={locale} dict={dict} />
        <JsonLdScript
          data={serviceJsonLd(locale, {
            slug: s.slug,
            name: title,
            description: tl(locale, s.intro),
            offers: s.deliverables.map((d) => tl(locale, d)),
          })}
        />
      </div>
    </PageTransition>
  );
}
