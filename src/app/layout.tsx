import type { ReactNode } from "react";
import "./globals.css";

/**
 * Minimal root layout — the localized layout in [locale] renders
 * <html> / <body> so lang + dir are correct per locale (en/ltr, ar/rtl).
 *
 * Providers (next-themes) is rendered inside <body> there: it emits an inline
 * theme script, which React 19 only allows inside the main document.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
