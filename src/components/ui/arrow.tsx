import { cn } from "@/lib/utils";

/** Reading-direction arrow (→ in English, ← in Arabic). Hand-drawn stroke, not an icon-set default. */
export function Arrow({ className, diagonal = false }: { className?: string; diagonal?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      aria-hidden="true"
      className={cn("arrow rtl:-scale-x-100", className)}
    >
      {diagonal ? <path d="M5 15 15 5M7 5h8v8" /> : <path d="M2 10h15M11 4l6 6-6 6" />}
    </svg>
  );
}
