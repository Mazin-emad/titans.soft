import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { industries } from "@/data/industries";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export function Industries({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.industries;
  const loc = (v: { en: string; ar: string }) => (locale === "ar" ? v.ar : v.en);
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} body={t.body} align="center" />
        <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={Math.min(i * 40, 400)}>
              <li
                title={loc(ind.description)}
                className="cursor-default rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-brand/50 hover:text-foreground"
              >
                {loc(ind.title)}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
