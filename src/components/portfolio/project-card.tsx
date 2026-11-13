import Link from "next/link";
import { ProjectCover } from "@/components/portfolio/project-cover";
import { Arrow } from "@/components/ui/arrow";
import { projects, type Project } from "@/data/projects";
import type { Dictionary } from "@/dictionaries/en";
import { tl } from "@/lib/i18n/t";
import type { SiteLocale } from "@/lib/site";

export function projectNumber(p: Project) {
  return projects.indexOf(p) + 1;
}

/** Grid card: cover, then a quiet caption block. */
export function ProjectCard({ project, locale, dict }: { project: Project; locale: SiteLocale; dict: Dictionary }) {
  return (
    <Link href={`/${locale}/work/${project.slug}`} className="group block">
      <ProjectCover
        project={project}
        caption={tl(locale, project.category)}
        caseLabel={dict.work.caseLabel}
        index={projectNumber(project)}
        captionDir={locale === "ar" ? "rtl" : "ltr"}
      />
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="heading text-2xl">
            <span className="bg-[linear-gradient(var(--accent),var(--accent))] bg-[length:0%_0.4em] bg-[position:0_88%] bg-no-repeat transition-[background-size] duration-500 ease-out-expo group-hover:bg-[length:100%_0.4em]">
              {tl(locale, project.title)}
            </span>
          </h3>
          <p className="mt-2 text-ink-soft">{tl(locale, project.tagline)}</p>
          <p className="label mt-4 flex flex-wrap gap-x-3 gap-y-1 text-muted">
            <span>{tl(locale, project.industry)}</span>
            <span aria-hidden="true">/</span>
            <span>{project.year}</span>
          </p>
        </div>
        <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-ink/70 transition-[background-color,color] duration-300 group-hover:bg-ink group-hover:text-paper">
          <Arrow className="size-4" />
          <span className="sr-only">{dict.work.openCase}</span>
        </span>
      </div>
    </Link>
  );
}
