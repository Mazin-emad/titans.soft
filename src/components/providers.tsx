"use client";

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState, type ReactNode } from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme-script";

export type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStored(): Theme {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    if (v === "light" || v === "dark" || v === "system") return v;
  } catch {}
  return "light";
}

function resolve(t: Theme): "light" | "dark" {
  if (t === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  return t;
}

function apply(t: Theme) {
  const r = resolve(t);
  document.documentElement.classList.toggle("dark", r === "dark");
  document.documentElement.style.colorScheme = r;
}

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  // The inline <head> script applies the theme before paint. In development, Strict
  // Mode's remount resets <html> attributes, so re-apply before paint (no-op in prod).
  useLayoutEffect(() => {
    const saved = readStored();
    apply(saved);
    const id = requestAnimationFrame(() => setThemeState(saved));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, t);
    } catch {}
    apply(t);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, resolvedTheme: theme === "dark" ? "dark" : "light" }),
    [theme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <Providers>");
  return ctx;
}
