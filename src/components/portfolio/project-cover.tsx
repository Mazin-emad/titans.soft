import Image from "next/image";
import { ViewTransition } from "react";
import { IsoBox } from "@/components/three/iso";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function isLight(hex: string) {
  const n = parseInt(hex.replace("#", ""), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 150;
}

/** A small 3D object that hints at the platform, sized in cqw so it scales with the cover. */
function PlatformObject({ platform, accent, fg }: { platform: Project["platform"]; accent: string; fg: string }) {
  const faces = {
    unit: "cqw" as const,
    top: `color-mix(in srgb, ${accent} 55%, white)`,
    sideA: `color-mix(in srgb, ${accent} 85%, black)`,
    sideB: `color-mix(in srgb, ${accent} 68%, black)`,
    line: `color-mix(in srgb, ${fg} 70%, transparent)`,
  };
  const screen = (
    <span className="absolute inset-[12%] border" style={{ borderColor: `color-mix(in srgb, ${fg} 55%, transparent)` }} />
  );
  switch (platform) {
    case "Mobile":
      return (
        <>
          <IsoBox w={14} d={26} h={2.4} x={8} y={2} {...faces}>{screen}</IsoBox>
          <IsoBox w={14} d={26} h={2.4} x={8} y={2} z={9} {...faces}>{screen}</IsoBox>
        </>
      );
    case "Web + Mobile":
      return (
        <>
          <IsoBox w={30} d={30} h={2.6} {...faces}>{screen}</IsoBox>
          <IsoBox w={9} d={16} h={2.2} x={4} y={10} z={8} {...faces}>{screen}</IsoBox>
          <IsoBox w={14} d={14} h={2.2} x={15} y={3} z={8} {...faces} />
        </>
      );
    case "Desktop":
      return (
        <>
          <IsoBox w={30} d={22} h={4} y={4} {...faces}>{screen}</IsoBox>
          <IsoBox w={30} d={22} h={4} y={4} z={10} {...faces} />
        </>
      );
    default:
      return (
        <>
          <IsoBox w={30} d={30} h={2.6} {...faces}>{screen}</IsoBox>
          <IsoBox w={30} d={30} h={2.6} z={8} {...faces}>{screen}</IsoBox>
          <IsoBox w={30} d={30} h={2.6} z={16} {...faces} />
        </>
      );
  }
}

export function ProjectCover({
  project,
  caption,
  caseLabel,
  index,
  className,
  priority = false,
  captionDir,
  wide = false,
}: {
  project: Project;
  /** Large text on the cover (the category — the title itself lives in the page/card heading). */
  caption: string;
  caseLabel: string;
  index: number;
  className?: string;
  priority?: boolean;
  captionDir?: "ltr" | "rtl";
  /** Wide banner covers (case-study header) scale the object down to fit the shorter height. */
  wide?: boolean;
}) {
  const fg = isLight(project.accent) ? "#141310" : "#f4f2ed";
  const shot = project.images?.[0];

  return (
    <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
      <div
        className={cn("@container relative aspect-[4/3] overflow-hidden", className)}
        style={{ backgroundColor: project.accent, color: fg }}
        dir="ltr"
      >
        <div className="absolute inset-x-[5cqw] top-[4.5cqw] flex items-start justify-between font-[family-name:var(--font-plex-mono)] text-[max(11px,1.6cqw)] uppercase tracking-[0.06em]">
          <span>{caseLabel} {String(index).padStart(2, "0")}</span>
          <span className="text-end">
            {project.platform}
            <br />
            {project.year}
          </span>
        </div>

        {shot ? (
          <div className="absolute inset-x-[5cqw] bottom-[17cqw] top-[15cqw] overflow-hidden border" style={{ borderColor: `${fg}40` }}>
            <Image
              src={shot.src}
              alt=""
              fill
              priority={priority}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div
            className={cn("absolute", wide ? "top-[58%] scale-[0.72]" : "top-[54%]", captionDir === "rtl" ? "left-[34%]" : "left-[64%]")}
            aria-hidden="true"
          >
            <div
              className="iso-scene relative transition-transform duration-1000 ease-out-expo [transform:rotateX(58deg)_rotateZ(45deg)] group-hover:[transform:rotateX(58deg)_rotateZ(25deg)]"
              style={{ width: "30cqw", height: "30cqw", marginLeft: "-15cqw", marginTop: "-15cqw" }}
            >
              <PlatformObject platform={project.platform} accent={project.accent} fg={fg} />
            </div>
          </div>
        )}

        <p
          dir={captionDir}
          aria-hidden="true"
          className={cn(
            "display-md absolute bottom-[4.5cqw] max-w-[50%] text-start text-[max(1.3rem,5.6cqw)] leading-[1]",
            captionDir === "rtl" ? "right-[5cqw]" : "left-[5cqw]",
          )}
        >
          {caption}
        </p>
      </div>
    </ViewTransition>
  );
}
