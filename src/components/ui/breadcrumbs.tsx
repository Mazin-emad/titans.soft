import Link from "next/link";
import { JsonLdScript, breadcrumbJsonLd } from "@/lib/jsonld";
import type { SiteLocale } from "@/lib/site";

/** Mono breadcrumb trail + matching BreadcrumbList JSON-LD. Paths are locale-relative. */
export function Breadcrumbs({
  locale,
  homeLabel,
  items,
}: {
  locale: SiteLocale;
  homeLabel: string;
  items: { name: string; path: string }[];
}) {
  const all = [{ name: homeLabel, path: "" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="label min-w-0 text-muted">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path || "home"} className="flex min-w-0 items-center gap-2">
                {last ? (
                  <span aria-current="page" className="truncate text-ink">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={`/${locale}${c.path}`} className="link">
                      {c.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLdScript data={breadcrumbJsonLd(locale, all)} />
    </>
  );
}
