import { ogSize, renderOgImage } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline.en}`;
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Software development company · Egypt & Saudi Arabia",
    title: siteConfig.tagline.en,
  });
}
