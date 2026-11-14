import { Archivo, IBM_Plex_Mono, Instrument_Sans, Vazirmatn } from "next/font/google";

/**
 * Typography
 *  Latin display — Archivo (variable, wdth axis): pushed wide & heavy for a monumental voice.
 *  Latin text    — Instrument Sans: precise, warm, very legible at body sizes.
 *  Mono labels   — IBM Plex Mono: technical metadata.
 *  Arabic         — Vazirmatn (variable, 100-900): one family for display, text
 *                   and labels. It is drawn for screen reading — tall
 *                   ascenders, open counters, even stroke colour — so long
 *                   Arabic passages stay readable at 18px, and at heavy weights
 *                   it holds the same monumental presence Archivo gives the
 *                   Latin headlines.
 *
 * The Arabic face is not preloaded: it is fetched only where Arabic glyphs are
 * actually needed (the Arabic pages, plus the "العربية" switcher label the
 * English pages show). On an Arabic page Vazirmatn leads the stack, so Latin
 * runs inside Arabic copy are drawn in Vazirmatn too — one voice per page.
 * Putting the Latin faces first would send Arabic text to the next/font
 * fallback face (local Arial), which is worse than a shared Latin cut.
 */

export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

export const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
  preload: false,
});

export const fontVariables = [archivo, instrument, plexMono, vazirmatn].map((f) => f.variable).join(" ");
