import { Archivo, Cairo, IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Instrument_Sans } from "next/font/google";

/**
 * Typography
 *  Latin display — Archivo (variable, wdth axis): pushed wide & heavy for a monumental voice.
 *  Latin text    — Instrument Sans: precise, warm, very legible at body sizes.
 *  Mono labels   — IBM Plex Mono: technical metadata, pairs with Plex Arabic.
 *  Arabic display — Cairo (variable, 200-1000): geometric Arabic sans, the landing-page
 *                   standard. Heavy weights stay monumental like Archivo, and it pairs with
 *                   it because both are geometric grotesques rather than calligraphic faces.
 *  Arabic text    — IBM Plex Sans Arabic: open counters, calm rhythm for long reading.
 *
 * Arabic faces load the Arabic subset only and aren't preloaded, so English pages
 * never download them — and Latin runs on Arabic pages still fall through to the
 * Latin faces instead of being drawn in Cairo.
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

export const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
  preload: false,
});

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
  preload: false,
});

export const fontVariables = [archivo, instrument, plexMono, cairo, plexArabic].map((f) => f.variable).join(" ");
