import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact/contact-form";
import { PageIntro } from "@/components/layout/page-intro";
import { PageTransition } from "@/components/layout/page-transition";
import { Arrow } from "@/components/ui/arrow";
import { Container } from "@/components/ui/section";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localizedMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  const dict = await getDictionary(loc);
  return localizedMetadata({ locale: loc, title: dict.seo.contact.title, description: dict.seo.contact.description, path: "/contact" });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const t = dict.contact;
  const c = siteConfig.contact;

  const channels = [
    { label: t.direct.email, value: c.email, href: `mailto:${c.email}`, ltr: true },
    { label: t.direct.phone, value: c.phoneDisplay, href: c.phoneHref, ltr: true },
    { label: t.direct.whatsapp, value: c.phoneDisplay, href: c.whatsapp, ltr: true, external: true },
    { label: t.direct.linkedin, value: "Titans.Soft", href: c.linkedin, external: true },
  ];

  return (
    <PageTransition>
      <div>
        <PageIntro
          locale={locale}
          homeLabel={dict.breadcrumbs.home}
          crumbs={[{ name: dict.nav.contact, path: "/contact" }]}
          meta={c.location[locale]}
          title={t.title}
          body={t.body}
        />

        <Container className="pb-24 sm:pb-32">
          {/* Quick channels first: many visitors just want an address. */}
          <ul className="grid border-t border-rule-strong md:grid-cols-2 xl:grid-cols-4">
            {channels.map((ch) => (
              <li
                key={ch.label}
                className="border-b border-rule md:max-xl:[&:nth-child(2n)]:border-e md:max-xl:[&:nth-child(2n)]:ps-6 md:max-xl:[&:nth-child(2n+1)]:border-e-0 md:max-xl:[&:nth-child(2n+1)]:ps-0 xl:[&:not(:last-child)]:border-e xl:[&:not(:first-child)]:ps-6"
              >
                <a
                  href={ch.href}
                  {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-end justify-between gap-4 py-6 pe-6"
                >
                  <span>
                    <span className="label block text-muted">{ch.label}</span>
                    <span className="heading mt-2 block text-xl sm:text-2xl" dir={ch.ltr ? "ltr" : undefined}>
                      {ch.value}
                    </span>
                  </span>
                  <Arrow diagonal className="mb-1.5 size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
          <p className="label mt-4 text-muted">{t.direct.response}</p>

          <div className="mt-20">
            <ContactForm locale={locale} dict={dict} />
          </div>

          <section aria-labelledby="next-title" className="mt-20 grid gap-6 border-t border-rule-strong pt-6 lg:grid-cols-12 lg:gap-8">
            <h2 id="next-title" className="label text-muted lg:col-span-3">
              <span className="text-ink">(03)</span> {t.nextStepsTitle}
            </h2>
            <ol className="grid gap-8 sm:grid-cols-3 lg:col-span-9">
              {t.nextSteps.map((step, i) => (
                <li key={step}>
                  <span className="display text-5xl text-accent-ink">{i + 1}</span>
                  <p className="mt-3 text-ink-soft">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </Container>
      </div>
    </PageTransition>
  );
}
