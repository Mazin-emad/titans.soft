import { MapPin, GitBranch, FileCode2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export function Trust({ dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.trust;
  const icons = [MapPin, GitBranch, FileCode2];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} body={t.body} />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {t.points.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={point} delay={i * 80}>
                <li className="flex h-full items-start gap-3 bg-background p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-card">
                    <Icon className="size-4 text-brand" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90">{point}</span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
