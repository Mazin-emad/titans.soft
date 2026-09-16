import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Compass, Code2, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { WhyUs } from "@/components/sections/why";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/lib/site";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  return localizedMetadata({
    locale: loc,
    title: loc === "ar" ? "من نحن — تايتنز سوفت" : "About — Titans.Soft",
    description:
      loc === "ar"
        ? "تايتنز سوفت فريق تطوير برمجيات مقره مصر يعمل مع عملاء في مصر والسعودية والمنطقة."
        : "Titans.Soft is a software development team based in Egypt, working across MENA.",
    path: "/about",
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const t = dict.about;

  const principles = [
    { icon: Compass, en: "Scope honestly", ar: "نطاق صادق", dEn: "Clear scope, milestones, and trade-offs — in writing.", dAr: "نطاق ومعالم ومفاضلات واضحة — مكتوبة." },
    { icon: Code2, en: "Code you own", ar: "كود تملّكه", dEn: "Documented repositories, handover, and no lock-in.", dAr: "مستودعات موثقة وتسليم بلا احتكار." },
    { icon: Handshake, en: "Stay after launch", ar: "نبقى بعد الإطلاق", dEn: "Maintenance and iteration as a standing option.", dAr: "الصيانة والتطوير خيار دائم." },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20">
          <Reveal>
            <Badge variant="brand" className="font-mono">{t.eyebrow}</Badge>
          </Reveal>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{t.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight">{t.principlesTitle}</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.en} delay={i * 80}>
              <article className="h-full rounded-lg border border-border bg-card p-6">
                <p.icon className="size-5 text-brand" aria-hidden="true" />
                <h3 className="mt-3 font-semibold">{locale === "ar" ? p.ar : p.en}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{locale === "ar" ? p.dAr : p.dEn}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <WhyUs locale={locale} dict={dict} />

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-background p-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-card">
                <MapPin className="size-5 text-brand" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">{t.operatingTitle}</h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{t.operatingBody}</p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  {locale === "ar" ? siteConfig.contact.location.ar : siteConfig.contact.location.en}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA locale={locale} dict={dict} />
    </>
  );
}
