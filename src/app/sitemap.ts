import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

/**
 * Bump when site-wide content changes meaningfully. A fixed date is deliberate:
 * stamping `new Date()` on every build tells crawlers everything changed daily.
 */
const SITE_UPDATED = "2026-11-10";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const pages: { path: string; priority: number; freq: "weekly" | "monthly"; updated?: string }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.9, freq: "monthly" as const })),
    { path: "/work", priority: 0.8, freq: "weekly" },
    ...projects.map((p) => ({ path: `/work/${p.slug}`, priority: 0.7, freq: "monthly" as const, updated: p.updated })),
    { path: "/solutions", priority: 0.7, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.6, freq: "monthly" },
  ];

  const languages = (path: string) => ({
    languages: {
      ...Object.fromEntries(siteConfig.locales.map((l) => [l, `${base}/${l}${path}`])),
      "x-default": `${base}/en${path}`,
    },
  });

  return siteConfig.locales.flatMap((locale) =>
    pages.map((p) => ({
      url: `${base}/${locale}${p.path}`,
      lastModified: p.updated ?? SITE_UPDATED,
      changeFrequency: p.freq,
      priority: p.priority,
      alternates: languages(p.path),
    })),
  );
}
