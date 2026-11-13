import Link from "next/link";
import { LocalTime } from "@/components/layout/local-time";
import { Logo } from "@/components/layout/logo";
import { Arrow } from "@/components/ui/arrow";
import { Container } from "@/components/ui/section";
import { services } from "@/data/services";
import type { Dictionary } from "@/dictionaries/en";
import { tl } from "@/lib/i18n/t";
import { siteConfig, type SiteLocale } from "@/lib/site";

/** Always-dark footer with an extruded 3D wordmark as the closing gesture. */
export function Footer({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.footer;
  const c = siteConfig.contact;
  const company = [
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/solutions`, label: dict.nav.solutions },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#141310] pb-24 text-[#f0ede6] [--rule:#2e2b26] lg:pb-0">
      <Container className="pt-16 sm:pt-20">
        <div className="grid gap-12 border-b border-rule pb-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo locale={locale} inverted />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#a39e92]">{t.description}</p>
            <p className="label mt-8 flex items-center gap-2 text-[#a39e92]">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-[#f5bf1e]" aria-hidden="true" />
              {t.localTime} <LocalTime locale={locale} />
            </p>
          </div>

          <nav aria-label={t.company} className="lg:col-span-2">
            <h2 className="label text-[#a39e92]">{t.company}</h2>
            <ul className="mt-5 space-y-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.servicesTitle} className="lg:col-span-3">
            <h2 className="label text-[#a39e92]">{t.servicesTitle}</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${locale}/services/${s.slug}`} className="link">
                    {tl(locale, s.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="label text-[#a39e92]">{t.contactTitle}</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${c.email}`} className="link" dir="ltr">
                  {c.email}
                </a>
              </li>
              <li>
                <a href={c.phoneHref} className="link" dir="ltr">
                  {c.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={c.whatsapp} target="_blank" rel="noopener noreferrer" className="link" dir="ltr">
                  WhatsApp
                </a>
              </li>
              <li className="text-[#a39e92]">{c.location[locale]}</li>
            </ul>
            <h2 className="label mt-8 text-[#a39e92]">{t.followTitle}</h2>
            <ul className="mt-4 flex gap-5">
              <li>
                <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="link">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={c.github} target="_blank" rel="noopener noreferrer" className="link">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 py-6 text-sm text-[#a39e92] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t.rights}
          </p>
          <a href="#main" className="link inline-flex w-fit items-center gap-2">
            {t.backToTop}
            <Arrow className="size-3.5 -rotate-90 rtl:rotate-90" />
          </a>
        </div>
      </Container>

      {/* Extruded wordmark — decorative, cropped by the page edge on purpose. */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden" dir="ltr">
        <p className="extrude -mb-[0.2em] whitespace-nowrap px-3 text-center font-[family-name:var(--font-archivo)] text-[16.5vw] leading-[0.85] font-black tracking-[-0.04em] text-[#f0ede6] [font-variation-settings:'wdth'_118]">
          TITANS.SOFT
        </p>
      </div>
    </footer>
  );
}
