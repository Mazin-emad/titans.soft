import { Section, SectionHeader } from "@/components/ui/section";
import { techGroups } from "@/data/technologies";
import type { Dictionary } from "@/dictionaries/en";
import { tl } from "@/lib/i18n/t";
import type { SiteLocale } from "@/lib/site";

/** The stack as a spec sheet: category in the margin, tools set in mono with their purpose. */
export function Technologies({ locale, dict, index = "06" }: { locale: SiteLocale; dict: Dictionary; index?: string }) {
  const t = dict.tech;
  return (
    <Section labelledBy="tech-title">
      <SectionHeader id="tech-title" index={index} label={t.eyebrow} title={t.title} body={t.body} />
      <dl className="mt-14 border-t border-rule-strong">
        {techGroups.map((g) => (
          <div key={g.slug} className="reveal grid gap-4 border-b border-rule py-6 lg:grid-cols-12 lg:gap-8">
            <dt className="heading text-lg lg:col-span-3">{tl(locale, g.title)}</dt>
            <dd className="lg:col-span-9">
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
                {g.items.map((it) => (
                  <li key={it.name} className="flex flex-col">
                    <span className="mono text-[15px] font-medium" dir="ltr">
                      {it.name}
                    </span>
                    <span className="text-sm text-muted">{tl(locale, it.note)}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
