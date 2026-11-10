import { Section, SectionHeader } from "@/components/ui/section";
import { processSteps } from "@/data/process";
import type { Dictionary } from "@/dictionaries/en";
import { tl } from "@/lib/i18n/t";
import type { SiteLocale } from "@/lib/site";

/**
 * Six columns on wide screens with a stepped baseline — each step sits a little
 * higher than the last, so the row literally reads as progress.
 */
export function Process({ locale, dict, index = "04" }: { locale: SiteLocale; dict: Dictionary; index?: string }) {
  const t = dict.process;
  return (
    <Section labelledBy="process-title" className="bg-ink text-paper">
      {/* Inverted palette for this block: re-point the text tokens at paper. */}
      <div className="[--ink-soft:color-mix(in_srgb,var(--paper)_78%,transparent)] [--ink:var(--paper)] [--muted:color-mix(in_srgb,var(--paper)_58%,transparent)] [--rule-strong:var(--paper)] [--rule:color-mix(in_srgb,var(--paper)_18%,transparent)]">
      <SectionHeader id="process-title" index={index} label={t.eyebrow} title={t.title} body={t.body} />
      <ol className="mt-16 grid gap-x-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-6 lg:items-end">
        {processSteps.map((s, i) => (
          <li key={s.index} className="reveal border-t border-rule py-6 lg:border-t-0 lg:py-0" style={{ ["--step" as string]: i }}>
            <div className="lg:pb-[calc(var(--step)*2.25rem)]">
              <div className="flex items-baseline justify-between border-b border-rule-strong pb-3">
                <span className="display text-5xl text-accent dark:text-accent-ink dark:[--accent-ink:#855c00]">{s.index}</span>
              </div>
              <h3 className="heading mt-5 text-xl">{tl(locale, s.title)}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{tl(locale, s.description)}</p>
            </div>
          </li>
        ))}
      </ol>
      </div>
    </Section>
  );
}
