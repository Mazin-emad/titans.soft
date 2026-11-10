import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import type { Dictionary } from "@/dictionaries/en";
import { siteConfig, type SiteLocale } from "@/lib/site";

/** Full-bleed saffron block — the one place the accent takes over the whole width. */
export function CTA({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.cta;
  return (
    <section aria-labelledby="cta-title" className="bg-accent text-on-accent">
      <Container className="py-20 sm:py-28">
        <p className="label flex items-center justify-between border-b border-on-accent pb-3">
          <span>{t.eyebrow}</span>
          <span>{siteConfig.contact.location[locale]}</span>
        </p>
        <h2 id="cta-title" className="display mt-10 max-w-[14ch] text-[clamp(2.75rem,8vw,8rem)]">
          {t.titleA} <span className="block">{t.titleB}</span>
        </h2>
        <div className="mt-12 flex flex-col gap-10 border-t border-on-accent/30 pt-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-on-accent text-accent hover:bg-paper hover:text-on-accent">
              <Link href={`/${locale}/contact`}>
                {t.primary}
                <Arrow />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-on-accent text-on-accent hover:bg-on-accent hover:text-accent">
              <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                {t.secondary}
              </a>
            </Button>
          </div>
          <div>
            <p className="label">{t.emailLabel}</p>
            <a href={`mailto:${siteConfig.contact.email}`} dir="ltr" className="heading mt-2 inline-block text-2xl underline decoration-1 underline-offset-[6px] hover:decoration-2 sm:text-3xl">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
