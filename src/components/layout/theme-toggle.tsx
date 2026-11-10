"use client";

import { useTheme } from "@/components/providers";

/** Paper ⇄ ink toggle. The glyph is a half-filled circle that rotates; state is pure CSS (.dark). */
export function ThemeToggle({ label }: { label: string }) {
  const { setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5"
    >
      <svg viewBox="0 0 20 20" className="size-[18px] transition-transform duration-500 ease-out-expo dark:rotate-180" aria-hidden="true">
        <circle cx="10" cy="10" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 2.75a7.25 7.25 0 0 1 0 14.5z" fill="currentColor" />
      </svg>
    </button>
  );
}
