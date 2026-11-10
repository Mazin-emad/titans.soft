"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "@/components/ui/arrow";
import { siteConfig, type SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Phones only: once the visitor scrolls past the first screen, keep the two
 * actions that matter (brief us / WhatsApp) within thumb reach.
 */
export function MobileActionBar({ locale, startLabel, whatsappLabel }: { locale: SiteLocale; startLabel: string; whatsappLabel: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 480;
      setShow(window.scrollY > window.innerHeight * 0.8 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper/95 p-3 backdrop-blur-md transition-transform duration-500 ease-out-expo lg:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!show}
    >
      <div className="flex gap-2">
        <Link
          href={`/${locale}/contact`}
          tabIndex={show ? 0 : -1}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-[4px] bg-ink text-[15px] font-medium text-paper"
        >
          {startLabel}
          <Arrow className="size-4" />
        </Link>
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          className="flex h-12 items-center justify-center rounded-[4px] border border-ink/80 px-4 text-[15px] font-medium"
        >
          {whatsappLabel}
        </a>
      </div>
    </div>
  );
}
