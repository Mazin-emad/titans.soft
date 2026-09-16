import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Titans.Soft — home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      {/* TS monogram — text treatment of the brand mark (white/blue on dark, black/blue on light) */}
      <span aria-hidden="true" className="grid size-8 place-items-center rounded-md border border-border bg-card font-mono text-[13px] font-bold tracking-tighter">
        <span>
          T<span className="text-brand">S</span>
        </span>
      </span>
      <span className="text-[17px] font-semibold tracking-tight">
        TITANS<span className="text-brand">.</span>SOFT
      </span>
    </Link>
  );
}
