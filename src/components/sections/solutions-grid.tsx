import Link from "next/link";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { solutions } from "@/data/solutions";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export function SolutionsGrid({ locale, dict, compact = false }: { locale: SiteLocale; dict: Dictionary; compact?: boolean }) {
  const t = dict.solutions;
  const loc = (v: { en: string; ar: string }) => (locale === "ar" ? v.ar : v.en);
  const list = compact ? solutions.slice(0, 8) : solutions;

  return (
    <section className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} body={t.body} />
          {compact ? (
            <Reveal>
              <Button asChild variant="outline">
                <Link href={`/${locale}/solutions`}>
                  {t.viewAll}
                  <ArrowUpRight className="size-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          ) : null}
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 60}>
              <article className="group h-full bg-background p-5 transition-colors hover:bg-card">
                <LayoutGrid className="size-4 text-muted-foreground transition-colors group-hover:text-brand" aria-hidden="true" />
                <h3 className="mt-3 text-[15px] font-semibold tracking-tight">{loc(s.title)}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{loc(s.description)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
