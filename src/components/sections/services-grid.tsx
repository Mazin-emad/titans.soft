import Link from "next/link";
import { Globe, Smartphone, Monitor, Boxes, Server, Sparkles, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { services, type Service } from "@/data/services";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export const serviceIcons: Record<Service["icon"], typeof Globe> = {
  globe: Globe,
  smartphone: Smartphone,
  monitor: Monitor,
  boxes: Boxes,
  server: Server,
  sparkles: Sparkles,
};

export function ServicesGrid({ locale, dict, compact = false }: { locale: SiteLocale; dict: Dictionary; compact?: boolean }) {
  const t = dict.services;
  const loc = (v: { en: string; ar: string }) => (locale === "ar" ? v.ar : v.en);
  const list = compact ? services.slice(0, 6) : services;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} body={t.body} />
        {compact ? (
          <Reveal>
            <Button asChild variant="outline">
              <Link href={`/${locale}/services`}>
                {t.viewAll}
                <ArrowUpRight className="size-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        ) : null}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          return (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <article id={s.slug} className="card-lift group h-full rounded-lg border border-border bg-card p-6">
                <span className="grid size-10 place-items-center rounded-md border border-border bg-background">
                  <Icon className="size-5 text-brand" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  <Link href={`/${locale}/services#${s.slug}`} className="transition-colors group-hover:text-brand">
                    {loc(s.title)}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{loc(s.description)}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={loc(s.title)}>
                  {s.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
