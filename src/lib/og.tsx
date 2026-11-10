import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

/**
 * Branded social card in the site's palette (limestone, ink, saffron).
 * The bundled OG font has no Arabic glyphs, so card text is English on every locale.
 */
export async function renderOgImage({ eyebrow, title, accent = "#F2B705" }: { eyebrow: string; title: string; accent?: string }) {
  const mark = await readFile(join(process.cwd(), "public/brand/mark-ink.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#F4F2ED", color: "#141310" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid #141310", paddingBottom: 18, fontSize: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontWeight: 800, fontSize: 28 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={markSrc} width={44} height={38} alt="" />
              <span style={{ display: "flex" }}>
                TITANS<span style={{ color: "#C99700" }}>.</span>SOFT
              </span>
            </div>
            <span style={{ color: "#6b675d" }}>{eyebrow.toUpperCase()}</span>
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 0.98, letterSpacing: -3, maxWidth: 900 }}>{title}</div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#6b675d" }}>
            <span>Web · Mobile · Desktop · APIs · AI</span>
            <span>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
          </div>
        </div>
        <div style={{ width: 28, background: accent }} />
      </div>
    ),
    ogSize,
  );
}
