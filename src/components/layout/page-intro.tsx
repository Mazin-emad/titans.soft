import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/section";
import type { SiteLocale } from "@/lib/site";

/** Inner-page masthead: breadcrumb trail on the rule, a big H1, lede in the right columns. */
export function PageIntro({
  locale,
  homeLabel,
  crumbs,
  title,
  body,
  meta,
  children,
}: {
  locale: SiteLocale;
  homeLabel: string;
  crumbs: { name: string; path: string }[];
  title: ReactNode;
  body?: ReactNode;
  /** Right-aligned text on the masthead rule (e.g. a count or location). */
  meta?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="pb-14 pt-24 sm:pb-20 sm:pt-28">
      <Container>
        <div className="flex items-center justify-between gap-4 border-b border-rule-strong pb-3">
          <Breadcrumbs locale={locale} homeLabel={homeLabel} items={crumbs} />
          {meta ? <span className="label hidden text-muted sm:block">{meta}</span> : null}
        </div>
        <h1 className="display mt-10 max-w-[18ch] text-[clamp(2.6rem,7.4vw,6.5rem)] rtl:max-w-[17ch]">{title}</h1>
        {body || children ? (
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:col-start-4">
              {body ? <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">{body}</p> : null}
              {children}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
