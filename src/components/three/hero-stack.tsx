"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";
import { IsoBox } from "@/components/three/iso";

const S = 280; // slab footprint (px)
const H = 22; // slab thickness
const GAP = 132; // vertical distance between slabs
const CAMERA = { x: 58, z: 45 };

type Layer = { name: string; detail: string };

/** Line drawings that sit on each slab's top face (drawn in the slab's own plane). */
function InterfaceArt() {
  return (
    <svg viewBox="0 0 280 280" className="size-full" fill="none" stroke="var(--face-line)" strokeWidth="1.4">
      <rect x="22" y="22" width="236" height="236" />
      <path d="M22 50h236M70 50v208" />
      <circle cx="34" cy="36" r="3" />
      <circle cx="45" cy="36" r="3" />
      <path d="M32 70h26M32 86h22M32 102h26M32 118h18" />
      <rect x="84" y="64" width="50" height="34" />
      <rect x="140" y="64" width="50" height="34" />
      <rect x="196" y="64" width="50" height="34" fill="var(--accent)" />
      <path d="M84 116h162M84 132h120M84 150h162M84 166h90" />
      <rect x="84" y="186" width="162" height="58" />
      <path d="M96 232l26-18 24 10 30-26 26 14 30-20" />
    </svg>
  );
}
function LogicArt() {
  const nodes: [number, number][] = [
    [60, 60], [140, 50], [220, 70], [80, 140], [170, 130], [230, 170], [60, 220], [140, 210], [210, 230],
  ];
  const edges = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 7], [5, 8], [6, 7], [7, 8]];
  return (
    <svg viewBox="0 0 280 280" className="size-full" fill="none" stroke="var(--on-accent)" strokeWidth="1.4">
      {edges.map(([a, b], i) => (
        <path key={i} d={`M${nodes[a][0]} ${nodes[a][1]}L${nodes[b][0]} ${nodes[b][1]}`} />
      ))}
      {nodes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 4 ? 11 : 7} fill={i === 4 ? "var(--on-accent)" : "var(--accent)"} />
      ))}
    </svg>
  );
}
function DataArt() {
  return (
    <svg viewBox="0 0 280 280" className="size-full" fill="none" stroke="var(--face-line)" strokeWidth="1.2">
      <rect x="22" y="22" width="236" height="236" />
      {[52, 82, 112, 142, 172, 202, 232].map((y) => (
        <path key={y} d={`M22 ${y}h236`} />
      ))}
      <path d="M90 22v236M160 22v236M210 22v236" />
      <rect x="22" y="22" width="68" height="30" fill="var(--face-b)" />
      <rect x="160" y="112" width="50" height="30" fill="var(--accent)" />
      <rect x="90" y="172" width="70" height="30" fill="var(--face-b)" />
    </svg>
  );
}

function Flag({ index, layer, rtl }: { index: string; layer: Layer; rtl: boolean }) {
  // Counter-rotate the camera so the label faces the viewer, anchored at the slab's outer corner.
  const style: CSSProperties = {
    position: "absolute",
    left: rtl ? 0 : S,
    top: rtl ? S : 0,
    transformOrigin: "0 0",
    transform: `translateZ(${H}px) rotateZ(${-CAMERA.z}deg) rotateX(${-CAMERA.x}deg)`,
  };
  return (
    <div style={style} className="hidden sm:block">
      <div className={rtl ? "flex -translate-x-full flex-row-reverse items-center gap-3" : "flex items-center gap-3"}>
        <span className="h-px w-14 bg-ink" />
        <span className={rtl ? "w-44 text-right" : "w-44"} dir={rtl ? "rtl" : "ltr"}>
          <span className="label block text-muted">{index}</span>
          <span className="heading block text-xl">{layer.name}</span>
          <span className="block text-[13px] leading-snug text-ink-soft">{layer.detail}</span>
        </span>
      </div>
    </div>
  );
}

export function HeroStack({ layers, rtl, title }: { layers: Layer[]; rtl: boolean; title: string }) {
  const stage = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const tx = (e.clientX - r.left) / r.width - 0.5;
    const ty = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      stage.current?.style.setProperty("--tx", tx.toFixed(3));
      stage.current?.style.setProperty("--ty", ty.toFixed(3));
    });
  };
  const onLeave = () => {
    cancelAnimationFrame(raf.current);
    stage.current?.style.setProperty("--tx", "0");
    stage.current?.style.setProperty("--ty", "0");
  };

  const [ui, logic, data] = layers;
  const corner = (z: number) => (
    // Dashed alignment guides between slabs, rising from each visible corner.
    <>
      {[
        [S, S],
        [S, 0],
        [0, S],
      ].map(([x, y]) => (
        <div
          key={`${x}-${y}`}
          className="absolute w-0 border-s border-dashed border-ink/40"
          style={{ left: x, top: y, height: z, transformOrigin: "top", transform: "rotateX(90deg)" }}
        />
      ))}
    </>
  );

  return (
    <figure
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative h-[340px] w-full select-none sm:h-[640px]"
      dir="ltr"
    >
      <figcaption className="sr-only">
        {title}: {layers.map((l) => `${l.name} (${l.detail})`).join(", ")}
      </figcaption>
      <div
        aria-hidden="true"
        className={`absolute left-1/2 top-[74%] origin-center scale-[0.62] sm:top-[70%] sm:scale-90 lg:scale-100 ${rtl ? "sm:left-[58%]" : "sm:left-[40%]"}`}
      >
        <div
          ref={stage}
          className="iso-scene relative transition-transform duration-700 ease-out motion-reduce:!transform-none"
          style={
            {
              width: S,
              height: S,
              marginLeft: -S / 2,
              marginTop: -S / 2,
              "--tx": 0,
              "--ty": 0,
              transform: `rotateX(calc(${CAMERA.x}deg - var(--ty) * 8deg)) rotateZ(calc(${CAMERA.z}deg + var(--tx) * 14deg))`,
            } as CSSProperties
          }
        >
          {/* soft contact shadow */}
          <div
            className="absolute -inset-10 [transform:translateZ(-2px)]"
            style={{ background: "radial-gradient(closest-side, color-mix(in srgb, var(--ink) 16%, transparent), transparent)" }}
          />
          {corner(GAP * 2 + H)}
          <IsoBox w={S} d={S} h={H} z={0} extra={<Flag index="03" layer={data} rtl={rtl} />}>
            <DataArt />
          </IsoBox>
          <IsoBox
            w={S}
            d={S}
            h={H}
            z={GAP}
            spread={34}
            top="var(--accent)"
            sideA="color-mix(in srgb, var(--accent) 78%, black)"
            sideB="color-mix(in srgb, var(--accent) 62%, black)"
            extra={<Flag index="02" layer={logic} rtl={rtl} />}
          >
            <LogicArt />
          </IsoBox>
          <IsoBox w={S} d={S} h={H} z={GAP * 2} spread={68} extra={<Flag index="01" layer={ui} rtl={rtl} />}>
            <InterfaceArt />
          </IsoBox>
        </div>
      </div>
    </figure>
  );
}
