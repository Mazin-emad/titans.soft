import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/project-card";
import { featuredProjects } from "@/data/projects";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export function FeaturedWork({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.work;
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} body={t.body} />
          <Reveal>
            <Button asChild variant="outline">
              <Link href={`/${locale}/work`}>
                {t.viewAll}
                <ArrowUpRight className="size-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80} className="relative">
              <ProjectCard locale={locale} dict={dict} project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
