"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import en from "@/dictionaries/en";
import ar from "@/dictionaries/ar";
import { isLocale } from "@/lib/i18n/config";

/**
 * The not-found boundary does not receive route params, so the locale is
 * derived from the URL prefix instead. Defaults to English.
 */
export default function LocaleNotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const locale = isLocale(segment) ? segment : "en";
  const dict = locale === "ar" ? ar : en;
  const t = dict.errors;

  return (
    <div className="relative overflow-hidden">
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-xl px-4 py-28 text-center sm:px-6">
        <p className="font-mono text-sm text-brand" aria-hidden="true">{t.notFoundEyebrow}</p>
        <p className="mt-2 font-mono text-7xl font-bold tracking-tighter text-foreground/15" aria-hidden="true">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">{t.notFoundTitle}</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">{t.notFoundBody}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="brand" asChild>
            <Link href={`/${locale}`}>
              <Home className="size-4" aria-hidden="true" />
              {t.notFoundHome}
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/${locale}/work`}>
              {t.notFoundWork}
              <ArrowUpRight className="size-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
