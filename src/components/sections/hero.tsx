import Link from "next/link";
import { HeroStack } from "@/components/three/hero-stack";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export function Hero({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.hero;
  return (
    <section aria-labelledby="hero-title" className="relative pt-24 sm:pt-28">
      <Container>
        {/* Masthead line */}
        <div className="label flex items-center justify-between gap-4 border-b border-rule-strong pb-3 text-ink">
          <span>{t.eyebrow}</span>
          <span className="text-muted">{t.location}</span>
        </div>

        <h1 id="hero-title" className="display mt-8 max-w-[15ch] text-[clamp(2.75rem,8.6vw,8.75rem)] sm:mt-10 rtl:max-w-[19ch]">
          {t.titleBefore} <span className="mark">{t.titleMark}</span> {t.titleAfter}
        </h1>

        <div className="mt-8 grid items-start gap-6 lg:mt-4 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pt-16">
            <p className="max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl">{t.subtitle}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={`/${locale}/contact`}>
                  {t.primaryCta}
                  <Arrow />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`/${locale}/work`}>{t.secondaryCta}</Link>
              </Button>
            </div>

            <ul className="mt-12 border-t border-rule">
              {t.points.map((p, i) => (
                <li key={p} className="flex items-baseline gap-4 border-b border-rule py-3">
                  <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative -mx-5 sm:mx-0 lg:col-span-7">
            <p className="label absolute end-0 top-2 hidden text-muted lg:block">{t.layersTitle}</p>
            <HeroStack layers={t.layers} rtl={locale === "ar"} title={t.layersTitle} />
            <ol className="grid grid-cols-3 gap-3 border-t border-rule px-5 pt-4 sm:hidden" aria-hidden="true">
              {t.layers.map((l, i) => (
                <li key={l.name}>
                  <span className="label block text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="heading block">{l.name}</span>
                  <span className="block text-xs leading-snug text-muted">{l.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
