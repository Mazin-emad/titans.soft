import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { CTA } from "@/components/sections/cta";
import { projects, getProject } from "@/data/projects";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { JsonLdScript, breadcrumbJsonLd, caseStudyJsonLd } from "@/lib/jsonld";
import { localizedMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.flatMap((p) => [{ locale: "en", slug: p.slug }, { locale: "ar", slug: p.slug }]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  const project = getProject(slug);
  if (!project) return {};
  const title = loc === "ar" ? project.title.ar : project.title.en;
  const description = loc === "ar" ? project.tagline.ar : project.tagline.en;
  return localizedMetadata({ locale: loc, title: `${title} — Titans.Soft`, description, path: `/work/${slug}` });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(slug);
  if (!project) notFound();
  const dict = await getDictionary(locale);
  const t = dict.work;
  const loc = (v: { en: string; ar: string }) => (locale === "ar" ? v.ar : v.en);
  const BackIcon = locale === "ar" ? ArrowUpRight : ArrowLeft;

  const blocks = [
    { label: t.overview, value: loc(project.description) },
    { label: t.problem, value: loc(project.problem) },
    { label: t.solution, value: loc(project.solution) },
  ];

  return (
    <>
      <article className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20">
        <Reveal>
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <BackIcon className="size-4 rtl:rotate-180" aria-hidden="true" />
            {t.backToWork}
          </Link>
        </Reveal>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <Badge>{loc(project.category)}</Badge>
              <Badge variant="outline">{project.platform}</Badge>
              {project.placeholder ? <Badge variant="brand">{t.placeholderNote}</Badge> : null}
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{loc(project.title)}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{loc(project.tagline)}</p>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
              {[
                { k: t.industry, v: loc(project.industry) },
                { k: t.platform, v: project.platform },
                { k: t.status, v: project.year },
                { k: t.stack, v: project.technologies.slice(0, 2).join(" · ") },
              ].map((row) => (
                <div key={row.k} className="bg-background px-4 py-3">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{row.k}</dt>
                  <dd className="mt-1 text-sm font-medium">{row.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-lg border border-border" aria-hidden="true">
              <div className="bg-grid absolute inset-0" />
              <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 80% 90% at 40% 20%, ${project.accent}2e, transparent 70%)` }} />
              <div className="relative flex h-64 items-center justify-center">
                <span className="font-mono text-7xl font-bold tracking-tighter text-foreground/10">
                  {project.title.en.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
              </div>
              <div className="relative flex items-center justify-between border-t border-border bg-card px-5 py-3 font-mono text-xs text-muted-foreground">
                <span>{project.technologies.join(" · ")}</span>
              </div>
            </div>
            {project.url ? (
              <a href={project.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline">
                <ExternalLink className="size-4" aria-hidden="true" />
                {t.liveProduct}
              </a>
            ) : (
              <p className="mt-4 font-mono text-xs text-muted-foreground">{t.noLiveUrl}</p>
            )}
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.label} delay={i * 80}>
              <section className="h-full rounded-lg border border-border bg-card p-6">
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-brand">{b.label}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/90">{b.value}</p>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <section className="mt-4 rounded-lg border border-border bg-card p-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-brand">{t.outcome}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/90">
              {project.outcome ? loc(project.outcome) : locale === "ar" ? "محتوى مؤقت: ستُضاف النتائج الحقيقية هنا عند توفر بيانات عميل فعلية." : "Placeholder: real outcomes will be added here when actual client data is available."}
            </p>
            <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{t.stack}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <div className="h-16" />
      </article>

      <JsonLdScript
        data={[
          breadcrumbJsonLd(locale, [
            { name: dict.nav.work, path: "/work" },
            { name: loc(project.title), path: `/work/${project.slug}` },
          ]),
          caseStudyJsonLd(locale, {
            slug: project.slug,
            name: loc(project.title),
            description: loc(project.tagline),
            year: project.year,
            technologies: project.technologies,
            url: project.url,
          }),
        ]}
      />
      <CTA locale={locale} dict={dict} />
    </>
  );
}
