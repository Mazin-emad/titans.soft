import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { PageTransition } from "@/components/layout/page-transition";
import { projectNumber } from "@/components/portfolio/project-card";
import { ProjectCover } from "@/components/portfolio/project-cover";
import { CTA } from "@/components/sections/cta";
import { Arrow } from "@/components/ui/arrow";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/section";
import { getProject, projects } from "@/data/projects";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { tl } from "@/lib/i18n/t";
import { JsonLdScript, caseStudyJsonLd } from "@/lib/jsonld";
import { localizedMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  const p = getProject(slug);
  if (!p) return {};
  return localizedMetadata({
    locale: loc,
    title: tl(loc, p.title),
    description: tl(loc, p.tagline),
    path: `/work/${slug}`,
    type: "article",
  });
}

/** One chapter of the case study: sticky label in the margin, prose on the right. */
function Chapter({ n, label, children }: { n: string; label: string; children: ReactNode }) {
  return (
    <section className="reveal grid gap-4 border-t border-rule-strong py-10 lg:grid-cols-12 lg:gap-8 lg:py-14">
      <h2 className="label text-muted lg:sticky lg:top-24 lg:col-span-3 lg:self-start">
        <span className="text-ink">({n})</span> {label}
      </h2>
      <div className="text-xl leading-relaxed lg:col-span-8 lg:text-[1.375rem]">{children}</div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const p = getProject(slug);
  if (!p) notFound();
  const dict = await getDictionary(locale);
  const t = dict.work;
  const title = tl(locale, p.title);
  const num = projectNumber(p);
  const next = projects[num % projects.length];

  const meta = [
    p.client ? { k: t.client, v: tl(locale, p.client) } : null,
    { k: t.industry, v: tl(locale, p.industry) },
    { k: t.platform, v: p.platform },
    { k: t.year, v: p.year },
    p.role ? { k: t.role, v: tl(locale, p.role) } : null,
    p.duration ? { k: t.duration, v: tl(locale, p.duration) } : null,
    { k: t.stack, v: p.technologies.join(", ") },
  ].filter((x): x is { k: string; v: string } => x !== null);

  let ch = 0;
  const chapter = () => String(++ch).padStart(2, "0");

  return (
    <PageTransition>
      <article>
        <header className="pb-12 pt-24 sm:pt-28">
          <Container>
            <div className="flex items-center justify-between gap-4 border-b border-rule-strong pb-3">
              <Breadcrumbs
                locale={locale}
                homeLabel={dict.breadcrumbs.home}
                items={[
                  { name: dict.nav.work, path: "/work" },
                  { name: title, path: `/work/${p.slug}` },
                ]}
              />
              <span className="label hidden text-muted sm:block">
                {t.caseLabel} {String(num).padStart(2, "0")}
              </span>
            </div>
            <h1 className="display mt-10 max-w-[16ch] text-[clamp(2.6rem,7.4vw,7.25rem)]">{title}</h1>
            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              <p className="text-xl text-ink-soft lg:col-span-7 lg:col-start-4 sm:text-2xl">{tl(locale, p.tagline)}</p>
            </div>
          </Container>
        </header>

        <Container>
          <ProjectCover
            project={p}
            caption={tl(locale, p.category)}
            caseLabel={t.caseLabel}
            index={num}
            priority
            captionDir={locale === "ar" ? "rtl" : "ltr"}
            wide
            className="aspect-[16/10] sm:aspect-[16/8]"
          />

          <dl className="mt-10 grid grid-cols-2 gap-x-8 border-t border-rule-strong sm:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
            {meta.map((m) => (
              <div key={m.k} className="border-b border-rule py-4">
                <dt className="label text-muted">{m.k}</dt>
                <dd className="mt-1 font-medium">{m.v}</dd>
              </div>
            ))}
          </dl>

          {p.metrics?.length ? (
            <dl className="mt-16 grid gap-x-8 border-t border-rule-strong sm:grid-cols-2 lg:grid-cols-4">
              {p.metrics.map((m) => (
                <div key={m.value} className="border-b border-rule py-6">
                  <dd className="display text-6xl" dir="ltr">
                    {m.value}
                  </dd>
                  <dt className="mt-3 text-ink-soft">{tl(locale, m.label)}</dt>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="mt-20">
            <Chapter n={chapter()} label={t.overview}>
              <p>{tl(locale, p.description)}</p>
            </Chapter>
            <Chapter n={chapter()} label={t.challenge}>
              <p>{tl(locale, p.problem)}</p>
            </Chapter>
            <Chapter n={chapter()} label={t.solution}>
              <p>{tl(locale, p.solution)}</p>
              {p.highlights?.length ? (
                <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
                  {p.highlights.map((h) => (
                    <div key={tl(locale, h.title)} className="border-t border-rule pt-5">
                      <dt className="heading text-lg text-ink">{tl(locale, h.title)}</dt>
                      <dd className="mt-3 text-base leading-relaxed text-ink-soft">{tl(locale, h.body)}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </Chapter>

            {p.images && p.images.length > 1 ? (
              <Chapter n={chapter()} label={t.screens}>
                <div className="grid gap-6 sm:grid-cols-2">
                  {p.images.slice(1).map((img) => {
                    const portrait = img.height > img.width;
                    return (
                      <Image
                        key={img.src}
                        src={img.src}
                        alt={tl(locale, img.alt)}
                        width={img.width}
                        height={img.height}
                        sizes={portrait ? "(min-width: 640px) 300px, 70vw" : "(min-width: 1024px) 33vw, 90vw"}
                        className={cn(
                          "h-auto w-full border border-rule",
                          portrait && "sm:col-span-2 sm:mx-auto sm:w-[300px]",
                        )}
                      />
                    );
                  })}
                </div>
              </Chapter>
            ) : null}

            <Chapter n={chapter()} label={t.outcome}>
              <p className={p.outcome ? undefined : "text-muted"}>{p.outcome ? tl(locale, p.outcome) : t.outcomePending}</p>
            </Chapter>

            {p.testimonial ? (
              <Chapter n={chapter()} label={t.testimonial}>
                <figure>
                  <blockquote className="display-md text-[clamp(1.6rem,3vw,2.5rem)]">“{tl(locale, p.testimonial.quote)}”</blockquote>
                  <figcaption className="mt-6 text-base text-ink-soft">
                    <span className="font-semibold text-ink">{p.testimonial.name}</span> — {tl(locale, p.testimonial.role)}
                  </figcaption>
                </figure>
              </Chapter>
            ) : null}

            <Chapter n={chapter()} label={t.stack}>
              <ul className="flex flex-wrap gap-x-6 gap-y-2" dir="ltr">
                {p.technologies.map((tech) => (
                  <li key={tech} className="mono font-medium">
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-2 font-medium">
                    {t.liveProduct}
                    <Arrow diagonal className="size-4" />
                  </a>
                ) : (
                  <span className="text-muted">{t.noLiveUrl}</span>
                )}
              </p>
            </Chapter>
          </div>

          {next && next.slug !== p.slug ? (
            <Link href={`/${locale}/work/${next.slug}`} className="group mb-24 mt-8 block border-y border-rule-strong py-10 sm:mb-32">
              <span className="label text-muted">{t.nextProject}</span>
              <span className="mt-4 flex items-center justify-between gap-6">
                <span className="display-md text-[clamp(2rem,5vw,4.5rem)] transition-[background-size] duration-500 ease-out-expo [background:linear-gradient(var(--accent),var(--accent))_no-repeat_0_88%/0%_0.35em] group-hover:[background-size:100%_0.35em]">
                  {tl(locale, next.title)}
                </span>
                <Arrow className="size-10 shrink-0 transition-transform duration-500 group-hover:translate-x-2 rtl:group-hover:-translate-x-2" />
              </span>
            </Link>
          ) : null}
        </Container>

        <CTA locale={locale} dict={dict} />
        <JsonLdScript
          data={caseStudyJsonLd(locale, {
            slug: p.slug,
            name: title,
            description: tl(locale, p.tagline),
            year: p.year,
            technologies: p.technologies,
            url: p.url,
            image: p.images?.[0]?.src,
          })}
        />
      </article>
    </PageTransition>
  );
}
