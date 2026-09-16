import type { ReactNode } from "react";
import { Providers } from "@/components/providers";
import "./globals.css";

/**
 * Minimal root layout — the localized layout in [locale] renders
 * <html> / <body> so lang + dir are correct per locale (en/ltr, ar/rtl).
 *
 * Providers (next-themes) lives here deliberately: it renders a blocking
 * inline <script> for no-flash theming, and scripts must not be created
 * during client-side rendering. The root layout never re-renders when
 * navigating between /en and /ar, so the script is emitted once on the
 * server — and the theme persists across language switches.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
