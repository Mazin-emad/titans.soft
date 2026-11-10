"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import ar from "@/dictionaries/ar";
import en from "@/dictionaries/en";
import { isLocale } from "@/lib/i18n/config";

export default function LocaleError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const params = useParams();
  const raw = typeof params?.locale === "string" ? params.locale : "en";
  const locale = isLocale(raw) ? raw : "en";
  const t = (locale === "ar" ? ar : en).errors;

  return (
    <Container className="pb-28 pt-24 sm:pt-28">
      <p className="label border-b border-rule-strong pb-3 text-muted">Error</p>
      <h1 className="display mt-10 max-w-[14ch] text-[clamp(2.6rem,7vw,6rem)]">{t.errorTitle}</h1>
      <p className="mt-6 max-w-xl text-lg text-ink-soft">{t.errorBody}</p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" onClick={reset}>
          {t.errorRetry}
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href={`/${locale}`}>
            {t.notFoundHome}
            <Arrow />
          </Link>
        </Button>
      </div>
    </Container>
  );
}
