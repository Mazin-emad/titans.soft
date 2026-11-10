import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/layout/page-intro";
import { PageTransition } from "@/components/layout/page-transition";
import { CTA } from "@/components/sections/cta";
import { Industries } from "@/components/sections/industries";
import { Container } from "@/components/ui/section";
import { solutions } from "@/data/solutions";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { tl } from "@/lib/i18n/t";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  const dict = await getDictionary(loc);
  return localizedMetadata({ locale: loc, title: dict.seo.solutions.title, description: dict.seo.solutions.description, path: "/solutions" });
}

export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const t = dict.solutions;

  return (
    <PageTransition>
      <div>
        <PageIntro
          locale={locale}
          homeLabel={dict.breadcrumbs.home}
          crumbs={[{ name: dict.nav.solutions, path: "/solutions" }]}
          meta={`${solutions.length} ${dict.nav.solutions}`}
          title={t.title}
          body={t.body}
        />
        <Container className="pb-8">
          <ol className="grid gap-x-10 border-t border-rule-strong md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <li key={s.slug} className="reveal group border-b border-rule py-8">
                <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="display-md mt-3 text-[1.75rem]">
                  <span className="transition-[background-size] duration-500 ease-out-expo [background:linear-gradient(var(--accent),var(--accent))_no-repeat_0_88%/0%_0.4em] group-hover:[background-size:100%_0.4em]">
                    {tl(locale, s.title)}
                  </span>
                </h2>
                <p className="mt-3 text-ink-soft">{tl(locale, s.description)}</p>
              </li>
            ))}
          </ol>
        </Container>
        <Industries locale={locale} dict={dict} index="01" />
        <CTA locale={locale} dict={dict} />
      </div>
    </PageTransition>
  );
}
