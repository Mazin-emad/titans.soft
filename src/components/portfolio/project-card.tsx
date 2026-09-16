import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export function ProjectCard({ locale, dict, project }: { locale: SiteLocale; dict: Dictionary; project: Project }) {
  const loc = (v: { en: string; ar: string }) => (locale === "ar" ? v.ar : v.en);

  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card">
      {/* Visual: abstract system gradient instead of fake screenshots */}
      <div className="relative h-44 overflow-hidden border-b border-border" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 70% 90% at 30% 20%, ${project.accent}26, transparent 70%)` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-5xl font-bold tracking-tighter text-foreground/10">
            {project.title.en.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </span>
        </div>
        <div className="absolute start-4 top-4 flex gap-2">
          <Badge>{loc(project.category)}</Badge>
          {project.placeholder ? (
            <Badge variant="brand">{dict.work.placeholderNote}</Badge>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-muted-foreground">
          {project.platform} · {loc(project.industry)}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">
          <Link href={`/${locale}/work/${project.slug}`} className="transition-colors group-hover:text-brand">
            {loc(project.title)}
            <span className="absolute inset-0" aria-hidden="true" />
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{loc(project.tagline)}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
              {tech}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
          {dict.work.openCase}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
