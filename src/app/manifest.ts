import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Custom Software Development`,
    short_name: siteConfig.name,
    description: siteConfig.description.en,
    start_url: "/en",
    display: "standalone",
    background_color: "#f4f2ed",
    theme_color: "#141310",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
