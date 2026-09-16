import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/process";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export function Process({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.process;
  const loc = (v: { en: string; ar: string }) => (locale === "ar" ? v.ar : v.en);
  return (
    <section className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} body={t.body} />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={(i % 3) * 80}>
              <li className="h-full rounded-lg border border-border bg-background p-6">
                <p className="font-mono text-sm text-brand" aria-hidden="true">{step.index}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{loc(step.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{loc(step.description)}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
