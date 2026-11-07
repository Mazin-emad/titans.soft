import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Shared social preview card for every page. The default OG font has no Arabic
 * glyphs, so the card is intentionally English/brand-only for both locales.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#050505",
          color: "#ededed",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 20% 0%, rgba(56,189,248,0.22), transparent)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 700 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#38bdf8",
              color: "#050505",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            TS
          </div>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {siteConfig.tagline.en}
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa" }}>Web · Mobile · Desktop · APIs · AI — Egypt · KSA · MENA</div>
        </div>
      </div>
    ),
    size,
  );
}
