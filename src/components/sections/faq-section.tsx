import Link from "next/link";
import { Faq } from "@/components/ui/faq";
import { Section, SectionHeader } from "@/components/ui/section";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

export function FaqSection({ locale, dict, index = "07" }: { locale: SiteLocale; dict: Dictionary; index?: string }) {
  const t = dict.faq;
  return (
    <Section labelledBy="faq-title">
      <SectionHeader
        id="faq-title"
        index={index}
        label={t.eyebrow}
        title={t.title}
        body={
          <>
            {t.body}{" "}
            <Link href={`/${locale}/contact`} className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4">
              {dict.nav.contact}
            </Link>
          </>
        }
      />
      <div className="mt-14 lg:ms-[25%]">
        <Faq items={t.items} name="home-faq" />
      </div>
    </Section>
  );
}
