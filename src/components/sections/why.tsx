import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { whyPoints } from "@/data/why";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export function WhyUs({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.why;
  const loc = (v: { en: string; ar: string }) => (locale === "ar" ? v.ar : v.en);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} body={t.body} />
      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2">
        {whyPoints.map((point, i) => (
          <Reveal key={point.slug} delay={(i % 2) * 80}>
            <article className="flex h-full items-start gap-4 bg-background p-6">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft" aria-hidden="true">
                <Check className="size-4 text-brand" />
              </span>
              <div>
                <h3 className="font-semibold tracking-tight">{loc(point.title)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{loc(point.description)}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
