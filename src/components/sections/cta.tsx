import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export function CTA({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.cta;
  return (
    <section className="border-t border-border">
      <div className="relative overflow-hidden">
        <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,var(--glow),transparent)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              {t.titleA}
              <br />
              <span className="text-brand">{t.titleB}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">{t.body}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="brand">
                <Link href={`/${locale}/contact`}>
                  {t.primary}
                  <ArrowUpRight className="size-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`/${locale}/contact`}>{t.secondary}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
