import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";
import { Section, SectionHeader } from "@/components/ui/section";
import { services, type Service } from "@/data/services";
import type { Dictionary } from "@/dictionaries/en";
import { tl } from "@/lib/i18n/t";
import type { SiteLocale } from "@/lib/site";

/**
 * Services as a ruled index — scannable like a table of contents. Hover floods the
 * row with saffron from the reading edge; the whole row is one large target.
 */
export function ServiceRows({ locale, items, dict }: { locale: SiteLocale; items: Service[]; dict: Dictionary }) {
  return (
    <ol className="border-t border-rule-strong">
      {items.map((s) => {
        const n = String(services.indexOf(s) + 1).padStart(2, "0");
        return (
          <li key={s.slug} className="reveal border-b border-rule-strong">
            <Link
              href={`/${locale}/services/${s.slug}`}
              className="group relative isolate -mx-3 grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 gap-y-3 px-3 py-7 transition-colors duration-300 hover:text-on-accent sm:py-9 lg:grid-cols-12 lg:items-center lg:gap-8"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover:scale-x-100 rtl:origin-right"
              />
              <span className="label pt-2 text-muted transition-colors group-hover:text-on-accent lg:col-span-1 lg:pt-0">{n}</span>
              <h3 className="display-md text-[clamp(1.6rem,3.4vw,3rem)] lg:col-span-5">{tl(locale, s.title)}</h3>
              <span className="col-start-3 row-start-1 grid size-11 place-items-center rounded-full border border-current transition-transform duration-500 ease-out-expo group-hover:-rotate-45 lg:order-last lg:col-span-1 lg:col-start-auto lg:row-start-auto lg:justify-self-end rtl:group-hover:rotate-45">
                <Arrow className="size-4" />
                <span className="sr-only">{dict.services.learnMore}</span>
              </span>
              <span className="col-span-2 col-start-2 lg:col-span-5 lg:col-start-auto">
                <span className="block text-ink-soft transition-colors group-hover:text-on-accent">{tl(locale, s.description)}</span>
                <span className="label mt-3 block text-muted transition-colors group-hover:text-on-accent/70" dir="ltr">
                  {s.tags.slice(0, 4).join(" · ")}
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export function ServicesIndex({ locale, dict, index = "01" }: { locale: SiteLocale; dict: Dictionary; index?: string }) {
  const t = dict.services;
  return (
    <Section labelledBy="services-title">
      <SectionHeader
        id="services-title"
        index={index}
        label={t.eyebrow}
        title={t.title}
        body={t.body}
        aside={
          <Link href={`/${locale}/services`} className="link inline-flex shrink-0 items-center gap-2 font-medium">
            {t.viewAll}
            <Arrow className="size-4" />
          </Link>
        }
      />
      <div className="mt-14">
        <ServiceRows locale={locale} items={services} dict={dict} />
      </div>
    </Section>
  );
}
