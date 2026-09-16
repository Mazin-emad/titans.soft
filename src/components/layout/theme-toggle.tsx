"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import type { Dictionary } from "@/dictionaries/en";

export function ThemeToggle({ labels }: { labels: Dictionary["nav"] }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const cycle = () => {
    const current = theme ?? resolvedTheme ?? "dark";
    if (current === "dark") setTheme("light");
    else if (current === "light") setTheme("system");
    else setTheme("dark");
  };

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={labels.themeToggle}
      title={labels.themeToggle}
      className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {!mounted ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (theme ?? resolvedTheme) === "dark" ? (
        <Moon className="size-4" aria-hidden="true" />
      ) : (theme ?? resolvedTheme) === "light" ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Monitor className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
