import Image from "next/image";
import Link from "next/link";
import type { SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({
  locale,
  className,
  onClick,
  inverted = false,
}: {
  locale: SiteLocale;
  className?: string;
  onClick?: () => void;
  /** Force the light-on-dark mark (e.g. in the always-dark footer). */
  inverted?: boolean;
}) {
  return (
    <Link
      href={`/${locale}`}
      onClick={onClick}
      aria-label={locale === "ar" ? "تايتنز سوفت — الرئيسية" : "Titans.Soft — home"}
      className={cn("group inline-flex items-center gap-2.5", className)}
      dir="ltr"
    >
      <span className="relative block h-[26px] w-[30px] transition-transform duration-500 ease-out-expo group-hover:-rotate-[8deg]">
        {inverted ? (
          <Image src="/brand/mark-bone.png" alt="" width={30} height={26} preload className="size-full object-contain" />
        ) : (
          <>
            <Image src="/brand/mark-ink.png" alt="" width={30} height={26} preload className="size-full object-contain dark:hidden" />
            <Image src="/brand/mark-bone.png" alt="" width={30} height={26} preload className="hidden size-full object-contain dark:block" />
          </>
        )}
      </span>
      <span className="font-[family-name:var(--font-archivo)] text-[17px] font-extrabold tracking-[-0.02em] [font-variation-settings:'wdth'_118]">
        TITANS<span className="text-accent">.</span>SOFT
      </span>
    </Link>
  );
}
