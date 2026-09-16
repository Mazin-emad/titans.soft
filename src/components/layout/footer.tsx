import Link from "next/link";
import { Mail, MessageCircle, ArrowUpRight, MapPin } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Dictionary } from "@/dictionaries/en";
import { siteConfig, type SiteLocale } from "@/lib/site";
import { services } from "@/data/services";

export function Footer({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.footer;
  const year = new Date().getFullYear();
  const loc = (v: { en: string; ar: string }) => (locale === "ar" ? v.ar : v.en);

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.description}</p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{t.builtIn}</p>
            <div className="mt-5">
              <LanguageSwitcher locale={locale} labels={dict.nav} />
            </div>
          </div>

          <nav aria-label={t.navigate}>
            <h3 className="text-sm font-semibold">{t.navigate}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link className="hover:text-foreground" href={`/${locale}/work`}>{dict.nav.work}</Link></li>
              <li><Link className="hover:text-foreground" href={`/${locale}/services`}>{dict.nav.services}</Link></li>
              <li><Link className="hover:text-foreground" href={`/${locale}/solutions`}>{dict.nav.solutions}</Link></li>
              <li><Link className="hover:text-foreground" href={`/${locale}/about`}>{dict.nav.about}</Link></li>
              <li><Link className="hover:text-foreground" href={`/${locale}/contact`}>{dict.nav.contact}</Link></li>
            </ul>
          </nav>

          <nav aria-label={t.servicesTitle}>
            <h3 className="text-sm font-semibold">{t.servicesTitle}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link className="hover:text-foreground" href={`/${locale}/services#${s.slug}`}>
                    {loc(s.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold">{t.contactTitle}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a className="inline-flex items-center gap-2 hover:text-foreground" href={`mailto:${siteConfig.contact.email}`}>
                  <Mail className="size-4" aria-hidden="true" />{siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-foreground" href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />WhatsApp
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-foreground" href={siteConfig.contact.linkedin} target="_blank" rel="noreferrer">
                  <ArrowUpRight className="size-4" aria-hidden="true" />LinkedIn
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4" aria-hidden="true" />
                {locale === "ar" ? siteConfig.contact.location.ar : siteConfig.contact.location.en}
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-gradient my-8" aria-hidden="true" />

        <div className="flex flex-col items-start justify-between gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} {siteConfig.name}. {t.rights}</p>
          <p className="font-mono">titans.soft — {locale === "ar" ? "القاهرة · مصر" : "Cairo · Egypt"}</p>
        </div>
      </div>
    </footer>
  );
}
