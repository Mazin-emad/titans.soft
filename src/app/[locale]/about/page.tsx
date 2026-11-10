import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/layout/page-intro";
import { PageTransition } from "@/components/layout/page-transition";
import { CTA } from "@/components/sections/cta";
import { Process } from "@/components/sections/process";
import { Technologies } from "@/components/sections/technologies";
import { WhyUs } from "@/components/sections/why";
import { Container } from "@/components/ui/section";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  const dict = await getDictionary(loc);
  return localizedMetadata({ locale: loc, title: dict.seo.about.title, description: dict.seo.about.description, path: "/about" });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const t = dict.about;

  return (
    <PageTransition>
      <div>
        <PageIntro
          locale={locale}
          homeLabel={dict.breadcrumbs.home}
          crumbs={[{ name: dict.nav.about, path: "/about" }]}
          title={t.title}
          body={t.body}
        />

        <Container>
          <dl className="grid grid-cols-2 border-t border-rule-strong lg:grid-cols-4">
            {t.facts.map((f) => (
              <div key={f.k} className="border-b border-rule py-6 pe-6">
                <dt className="label text-muted">{f.k}</dt>
                <dd className="heading mt-2 text-xl">{f.v}</dd>
              </div>
            ))}
          </dl>

          <section aria-labelledby="story-title" className="grid gap-6 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8">
            <h2 id="story-title" className="label text-muted lg:col-span-3">
              <span className="text-ink">(01)</span> {t.storyTitle}
            </h2>
            <div className="space-y-8 lg:col-span-9">
              {t.story.map((para, i) => (
                <p key={para} className={i === 0 ? "display-md text-[clamp(1.6rem,3vw,2.6rem)]" : "max-w-3xl text-xl leading-relaxed text-ink-soft"}>
                  {para}
                </p>
              ))}
              <div className="max-w-3xl border-s-[3px] border-accent ps-6">
                <h3 className="heading text-xl">{t.operatingTitle}</h3>
                <p className="mt-2 text-ink-soft">{t.operatingBody}</p>
              </div>
            </div>
          </section>
        </Container>

        <WhyUs locale={locale} dict={dict} index="02" />
        <Process locale={locale} dict={dict} index="03" />
        <Technologies locale={locale} dict={dict} index="04" />
        <CTA locale={locale} dict={dict} />
      </div>
    </PageTransition>
  );
}
