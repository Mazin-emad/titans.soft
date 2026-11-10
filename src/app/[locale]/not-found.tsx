"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import ar from "@/dictionaries/ar";
import en from "@/dictionaries/en";
import { isLocale } from "@/lib/i18n/config";

/** The not-found boundary doesn't receive params, so the locale comes from the URL. */
export default function LocaleNotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const locale = isLocale(segment) ? segment : "en";
  const t = (locale === "ar" ? ar : en).errors;

  return (
    <Container className="pb-28 pt-24 sm:pt-28">
      <p className="label border-b border-rule-strong pb-3 text-muted">Error 404</p>
      <p className="display mt-10 text-[clamp(7rem,26vw,22rem)] leading-[0.8]" aria-hidden="true" dir="ltr">
        4<span className="text-accent">0</span>4
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:col-start-4">
          <h1 className="display-md text-4xl">{t.notFoundTitle}</h1>
          <p className="mt-4 text-lg text-ink-soft">{t.notFoundBody}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={`/${locale}`}>
                {t.notFoundHome}
                <Arrow />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`/${locale}/work`}>{t.notFoundWork}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
