import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { CTA } from "@/components/sections/cta";
import { projects } from "@/data/projects";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  const dict = await getDictionary(loc);
  const title = loc === "ar" ? "أعمالنا — تايتنز سوفت" : "Work — Titans.Soft";
  const description = dict.work.body;
  return localizedMetadata({ locale: loc, title, description, path: "/work" });
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20">
          <Reveal>
            <Badge variant="brand" className="font-mono">{dict.work.eyebrow}</Badge>
          </Reveal>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{dict.work.title}</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{dict.work.body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80} className="relative">
              <ProjectCard locale={locale} dict={dict} project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTA locale={locale} dict={dict} />
    </>
  );
}
