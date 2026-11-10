"use client";

import { useEffect, useState } from "react";

function format(locale: string) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG-u-nu-latn" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Cairo",
  }).format(new Date());
}

/** Live Cairo clock — a small human detail: "it's 14:32 here". Renders nothing until mounted. */
export function LocalTime({ locale }: { locale: string }) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => setTime(format(locale));
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 30_000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, [locale]);
  return (
    <time dir="ltr" className="tabular-nums">
      {time ?? "--:--"}
    </time>
  );
}
