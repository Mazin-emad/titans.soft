import { Section, SectionHeader } from "@/components/ui/section";
import { whyPoints } from "@/data/why";
import type { Dictionary } from "@/dictionaries/en";
import { tl } from "@/lib/i18n/t";
import type { SiteLocale } from "@/lib/site";

/** Principles as a numbered manifesto — text does the work, no decoration. */
export function WhyUs({ locale, dict, index = "03" }: { locale: SiteLocale; dict: Dictionary; index?: string }) {
  const t = dict.why;
  return (
    <Section labelledBy="why-title">
      <SectionHeader id="why-title" index={index} label={t.eyebrow} title={t.title} body={t.body} />
      <ol className="mt-16 grid gap-x-12 lg:ms-[25%] lg:grid-cols-2">
        {whyPoints.map((p, i) => (
          <li
            key={p.slug}
            className={`reveal grid grid-cols-[3rem_1fr] gap-4 border-t py-8 ${i === 0 ? "border-rule-strong lg:col-span-2" : "border-rule"}`}
          >
            <span className="display-md text-3xl text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className={i === 0 ? "display-md text-[clamp(1.6rem,2.6vw,2.25rem)]" : "heading text-xl"}>{tl(locale, p.title)}</h3>
              <p className={`mt-3 text-ink-soft ${i === 0 ? "max-w-2xl text-lg" : ""}`}>{tl(locale, p.description)}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
