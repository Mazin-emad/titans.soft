"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

function swapLocale(pathname: string, next: SiteLocale): string {
  const segments = pathname.split("/");
  if (segments.length > 1 && (segments[1] === "en" || segments[1] === "ar")) {
    segments[1] = next;
    return segments.join("/") || "/";
  }
  return `/${next}`;
}

/** Shows the *other* language in its own script, so a reader of either can find it. */
export function LanguageSwitcher({ locale, label, className }: { locale: SiteLocale; label: string; className?: string }) {
  const pathname = usePathname();
  const other: SiteLocale = locale === "ar" ? "en" : "ar";
  return (
    <Link
      href={swapLocale(pathname, other)}
      hrefLang={other}
      lang={other}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-9 items-center rounded-full px-3 text-[15px] font-semibold text-ink transition-colors hover:bg-ink/5",
        other === "ar" ? "font-[family-name:var(--font-vazirmatn)]" : "font-[family-name:var(--font-instrument)]",
        className,
      )}
    >
      {other === "ar" ? "العربية" : "English"}
    </Link>
  );
}
