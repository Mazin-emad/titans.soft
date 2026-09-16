"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isLocale } from "@/lib/i18n/config";

export default function LocaleError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const params = useParams();
  const raw = typeof params?.locale === "string" ? params.locale : "en";
  const locale = isLocale(raw) ? raw : "en";
  const ar = locale === "ar";

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <AlertTriangle className="mx-auto size-10 text-brand" aria-hidden="true" />
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Error</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">
        {ar ? "حدث خطأ ما." : "Something went wrong."}
      </h1>
      <p className="mt-3 text-muted-foreground">
        {ar ? "حدث خطأ غير متوقع. حاول مجددًا — وإذا استمر تواصل معنا مباشرة." : "An unexpected error occurred. Try again — and if it persists, contact us directly."}
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button variant="brand" onClick={reset}>
          <RotateCcw className="size-4" aria-hidden="true" />
          {ar ? "حاول مجددًا" : "Try again"}
        </Button>
        <Button variant="outline" asChild>
          <Link href={`/${locale}`}>
            <Home className="size-4" aria-hidden="true" />
            {ar ? "عودة للرئيسية" : "Back to home"}
          </Link>
        </Button>
      </div>
    </div>
  );
}
