import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();
  const routes = ["", "/work", "/services", "/solutions", "/about", "/contact"];

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of siteConfig.locales) {
    for (const route of routes) {
      entries.push({
        url: `${base}/${locale}${route}`,
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7,
      });
    }
    for (const p of projects) {
      entries.push({
        url: `${base}/${locale}/work/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }
  return entries;
}
