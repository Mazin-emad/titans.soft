"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { locales, type SiteLocale } from "@/lib/i18n/config";
import type { Dictionary } from "@/dictionaries/en";
import { cn } from "@/lib/utils";

function swapLocale(pathname: string, next: SiteLocale): string {
  const segments = pathname.split("/");
  // pathname like /en/work/x or /ar — first segment is "" then locale
  if (segments.length > 1 && (segments[1] === "en" || segments[1] === "ar")) {
    segments[1] = next;
    return segments.join("/") || "/";
  }
  return `/${next}`;
}

export function LanguageSwitcher({ locale, labels }: { locale: SiteLocale; labels: Dictionary["nav"] }) {
  const pathname = usePathname();
  const other = locales.find((l) => l !== locale) ?? "en";

  return (
    <Link
      href={swapLocale(pathname, other)}
      hrefLang={other}
      aria-label={labels.language}
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 text-sm text-muted-foreground",
        "transition-colors hover:bg-accent hover:text-foreground"
      )}
    >
      <Languages className="size-4" aria-hidden="true" />
      <span className="font-medium">{other === "ar" ? "العربية" : "EN"}</span>
    </Link>
  );
}
