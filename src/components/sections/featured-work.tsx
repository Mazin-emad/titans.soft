import Link from "next/link";
import { projectNumber } from "@/components/portfolio/project-card";
import { ProjectCover } from "@/components/portfolio/project-cover";
import { Arrow } from "@/components/ui/arrow";
import { Section, SectionHeader } from "@/components/ui/section";
import { featuredProjects } from "@/data/projects";
import type { Dictionary } from "@/dictionaries/en";
import { tl } from "@/lib/i18n/t";
import type { SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Large alternating case rows — the work gets room to breathe. */
export function FeaturedWork({ locale, dict, index = "02" }: { locale: SiteLocale; dict: Dictionary; index?: string }) {
  const t = dict.work;
  if (featuredProjects.length === 0) return null;

  return (
    <Section labelledBy="work-title" className="bg-paper-alt">
      <SectionHeader
        id="work-title"
        index={index}
        label={t.eyebrow}
        title={t.title}
        body={t.body}
        aside={
          <Link href={`/${locale}/work`} className="link inline-flex shrink-0 items-center gap-2 font-medium">
            {t.viewAll}
            <Arrow className="size-4" />
          </Link>
        }
      />

      <ol className="mt-16 space-y-20 lg:space-y-28">
        {featuredProjects.slice(0, 3).map((p, i) => (
          <li key={p.slug} className="reveal">
            <Link href={`/${locale}/work/${p.slug}`} className="group grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
              <div className={cn("lg:col-span-7", i % 2 === 1 && "lg:order-last")}>
                <ProjectCover
                  project={p}
                  caption={tl(locale, p.category)}
                  caseLabel={t.caseLabel}
                  index={projectNumber(p)}
                  captionDir={locale === "ar" ? "rtl" : "ltr"}
                />
              </div>
              <div className="lg:col-span-5">
                <p className="label text-muted">
                  {t.caseLabel} {String(projectNumber(p)).padStart(2, "0")}
                  {p.placeholder ? <span className="text-accent-ink"> — {t.sampleBadge}</span> : null}
                </p>
                <h3 className="display-md mt-4 text-[clamp(2rem,3.6vw,3.25rem)]">{tl(locale, p.title)}</h3>
                <p className="mt-4 text-lg text-ink-soft">{tl(locale, p.tagline)}</p>
                <dl className="mt-8 grid grid-cols-2 border-t border-rule-strong">
                  {[
                    { k: t.industry, v: tl(locale, p.industry) },
                    { k: t.platform, v: p.platform },
                    { k: t.year, v: p.year },
                    { k: t.stack, v: p.technologies.slice(0, 3).join(", ") },
                  ].map((row) => (
                    <div key={row.k} className="border-b border-rule py-3 pe-4">
                      <dt className="label text-muted">{row.k}</dt>
                      <dd className="mt-1 font-medium">{row.v}</dd>
                    </div>
                  ))}
                </dl>
                <span className="link mt-8 inline-flex items-center gap-2 font-medium">
                  {t.openCase}
                  <Arrow className="size-4" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}
