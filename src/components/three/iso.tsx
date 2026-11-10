import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A solid box in CSS 3D space. Lives inside an `.iso-scene` stage whose transform
 * provides the camera. Faces are real planes, so the browser depth-sorts them.
 *
 * w × d is the footprint, h the thickness, z the elevation — all in `unit`
 * (px by default; "cqw" makes the object scale with its container).
 * `spread` lets the box drift upward as the page scrolls (scroll-driven).
 */
export function IsoBox({
  w,
  d,
  h,
  x = 0,
  y = 0,
  z = 0,
  unit = "px",
  spread,
  top,
  sideA,
  sideB,
  line,
  className,
  children,
  extra,
}: {
  w: number;
  d: number;
  h: number;
  x?: number;
  y?: number;
  z?: number;
  unit?: "px" | "cqw";
  spread?: number;
  top?: string;
  sideA?: string;
  sideB?: string;
  line?: string;
  className?: string;
  /** Drawn on the top face, in the box's own plane. */
  children?: ReactNode;
  /** Extra 3D children (e.g. labels) positioned relative to the box. */
  extra?: ReactNode;
}) {
  const u = (v: number) => `${v}${unit}`;
  const style = {
    width: u(w),
    height: u(d),
    left: u(x),
    top: u(y),
    transform: `translateZ(${u(z)})`,
    "--h": u(h),
    "--z": u(z),
    ...(spread ? { "--spread": u(spread) } : {}),
    ...(top ? { "--top": top } : {}),
    ...(sideA ? { "--side-a": sideA } : {}),
    ...(sideB ? { "--side-b": sideB } : {}),
    ...(line ? { "--face-line": line } : {}),
  } as CSSProperties;

  return (
    <div className={cn("iso-box", spread && "iso-explode", className)} style={style}>
      <div className="face face-bottom" />
      <div className="face face-back" />
      <div className="face face-left" />
      <div className="face face-front" />
      <div className="face face-right" />
      <div className="face face-top overflow-hidden">{children}</div>
      {extra}
    </div>
  );
}
