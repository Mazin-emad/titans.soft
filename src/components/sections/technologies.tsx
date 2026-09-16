import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { techGroups } from "@/data/technologies";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export function Technologies({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.tech;
  const loc = (v: { en: string; ar: string }) => (locale === "ar" ? v.ar : v.en);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} body={t.body} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {techGroups.map((g, i) => (
          <Reveal key={g.slug} delay={(i % 3) * 80}>
            <article className="h-full rounded-lg border border-border bg-card">
              <h3 className="border-b border-border px-5 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {loc(g.title)}
              </h3>
              <ul className="divide-y divide-border">
                {g.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-4 px-5 py-3">
                    <span className="font-mono text-[13px] font-medium text-foreground">{item.name}</span>
                    <span className="text-right text-xs text-muted-foreground">{loc(item.note)}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
