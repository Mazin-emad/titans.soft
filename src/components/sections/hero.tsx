import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

function TerminalCard({ dict }: { dict: Dictionary }) {
  const lines = dict.hero.terminal.lines;
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_8px_40px_-16px_var(--glow)]" dir="ltr">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-brand/60" aria-hidden="true" />
        <span className="ms-2 truncate font-mono text-xs text-muted-foreground">{dict.hero.terminal.title}</span>
      </div>
      <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed">
        {lines.map((l, i) => (
          <p key={i} className="flex gap-2">
            <span className={l.prompt === "✓" ? "text-brand" : "text-muted-foreground"} aria-hidden="true">
              {l.prompt}
            </span>
            <span className="text-foreground/90">{l.text}</span>
            {i === 0 ? <span className="inline-block h-4 w-[7px] animate-pulse bg-brand/80" aria-hidden="true" /> : null}
          </p>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-border px-5 py-3 font-mono text-[11px] text-muted-foreground">
        <span>next · typescript · .net · docker</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse-soft" aria-hidden="true" />
          operational
        </span>
      </div>
    </div>
  );
}

export function Hero({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.hero;
  return (
    <section className="relative overflow-hidden pt-16">
      {/* technical backdrop */}
      <div className="bg-grid bg-grid-fade absolute inset-0 animate-grid-pan" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,var(--glow),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Badge variant="brand" className="font-mono">
              <span className="size-1.5 rounded-full bg-brand animate-pulse-soft" aria-hidden="true" />
              {t.badge}
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl">
              {t.titleLead}{" "}
              <span className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
                {t.titleAccent}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.subtitle}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="brand">
                <Link href={`/${locale}/contact`}>
                  {t.primaryCta}
                  <ArrowUpRight className="size-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`/${locale}/work`}>{t.secondaryCta}</Link>
              </Button>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <dt className="sr-only">Base</dt>
                <dd>{t.meta.base}</dd>
              </div>
              <div className="flex items-center gap-2" aria-hidden="true"><span className="text-border">/</span></div>
              <div><dd>{t.meta.scope}</dd></div>
              <div className="flex items-center gap-2" aria-hidden="true"><span className="text-border">/</span></div>
              <div><dd>{t.meta.focus}</dd></div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl" aria-hidden="true" />
            <TerminalCard dict={dict} />
          </div>
        </div>

        <div className="mt-14 flex justify-center" aria-hidden="true">
          <ArrowDown className="size-4 animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
