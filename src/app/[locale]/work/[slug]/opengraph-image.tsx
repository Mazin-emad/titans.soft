import { getProject } from "@/data/projects";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Titans.Soft case study";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  return renderOgImage({
    eyebrow: p ? `Case study · ${p.category.en}` : "Case study",
    title: p ? p.title.en : "Titans.Soft",
    accent: p?.accent,
  });
}
