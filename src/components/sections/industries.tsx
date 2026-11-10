import { Section, SectionHeader } from "@/components/ui/section";
import { industries } from "@/data/industries";
import type { Dictionary } from "@/dictionaries/en";
import { tl } from "@/lib/i18n/t";
import type { SiteLocale } from "@/lib/site";

/** Industries set as running display type; the detail line is revealed per item. */
export function Industries({ locale, dict, index = "05" }: { locale: SiteLocale; dict: Dictionary; index?: string }) {
  const t = dict.industries;
  return (
    <Section labelledBy="industries-title">
      <SectionHeader id="industries-title" index={index} label={t.eyebrow} title={t.title} body={t.body} />
      <ul className="mt-14 grid gap-x-8 border-t border-rule-strong sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <li key={ind.slug} className="reveal group flex items-baseline gap-4 border-b border-rule py-5">
            <span className="label w-6 text-muted">{String(i + 1).padStart(2, "0")}</span>
            <span>
              <span className="display-md text-2xl transition-[background-size] duration-500 ease-out-expo [background:linear-gradient(var(--accent),var(--accent))_no-repeat_0_88%/0%_0.4em] group-hover:[background-size:100%_0.4em]">
                {tl(locale, ind.title)}
              </span>
              <span className="mt-1 block text-[15px] text-muted">{tl(locale, ind.description)}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
