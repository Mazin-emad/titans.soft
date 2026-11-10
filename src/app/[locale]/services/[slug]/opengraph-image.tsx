import { getService } from "@/data/services";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Titans.Soft service";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  return renderOgImage({ eyebrow: "Services", title: s ? s.seo.title.en : "Software Development Services" });
}
