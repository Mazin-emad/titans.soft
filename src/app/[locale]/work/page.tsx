import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/layout/page-intro";
import { PageTransition } from "@/components/layout/page-transition";
import { ProjectCard } from "@/components/portfolio/project-card";
import { WorkFilter } from "@/components/portfolio/work-filter";
import { CTA } from "@/components/sections/cta";
import { Container } from "@/components/ui/section";
import { projects } from "@/data/projects";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { tl } from "@/lib/i18n/t";
import { JsonLdScript, itemListJsonLd } from "@/lib/jsonld";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  const dict = await getDictionary(loc);
  return localizedMetadata({ locale: loc, title: dict.seo.work.title, description: dict.seo.work.description, path: "/work" });
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const t = dict.work;
  const categories = [...new Set(projects.map((p) => tl(locale, p.category)))];

  return (
    <PageTransition>
      <div>
        <PageIntro
          locale={locale}
          homeLabel={dict.breadcrumbs.home}
          crumbs={[{ name: dict.nav.work, path: "/work" }]}
          meta={`${String(projects.length).padStart(2, "0")} ${t.caseLabel}`}
          title={t.title}
          body={t.body}
        />
        <Container className="pb-24 sm:pb-32">
          <WorkFilter
            allLabel={t.filterAll}
            label={t.filterLabel}
            categories={categories}
            items={projects.map((p) => ({
              key: p.slug,
              category: tl(locale, p.category),
              node: <ProjectCard project={p} locale={locale} dict={dict} />,
            }))}
          />
        </Container>
        <CTA locale={locale} dict={dict} />
        {projects.length > 0 ? (
          <JsonLdScript data={itemListJsonLd(locale, projects.map((p) => ({ name: tl(locale, p.title), path: `/work/${p.slug}` })))} />
        ) : null}
      </div>
    </PageTransition>
  );
}
