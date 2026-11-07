import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { projects } from "@/data/projects";

/**
 * Bump when site-wide content changes meaningfully. A fixed date is deliberate:
 * stamping `new Date()` on every build tells crawlers everything changed daily,
 * which erodes trust in lastmod.
 */
const SITE_UPDATED = "2026-11-07";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const routes = ["", "/work", "/services", "/solutions", "/about", "/contact"];

  const alternates = (path: string) => ({
    languages: Object.fromEntries(siteConfig.locales.map((l) => [l, `${base}/${l}${path}`])),
  });

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of siteConfig.locales) {
    for (const route of routes) {
      entries.push({
        url: `${base}/${locale}${route}`,
        lastModified: SITE_UPDATED,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7,
        alternates: alternates(route),
      });
    }
    for (const p of projects) {
      entries.push({
        url: `${base}/${locale}/work/${p.slug}`,
        lastModified: p.updated ?? SITE_UPDATED,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: alternates(`/work/${p.slug}`),
      });
    }
  }
  return entries;
}
