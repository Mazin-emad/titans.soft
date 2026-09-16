import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, MessageCircle, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site";
import { isLocale, type SiteLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc: SiteLocale = isLocale(locale) ? locale : "en";
  return localizedMetadata({
    locale: loc,
    title: loc === "ar" ? "تواصل معنا — تايتنز سوفت" : "Contact — Titans.Soft",
    description:
      loc === "ar"
        ? "أخبرنا بما تبنيه — سنساعدك على تحويل الفكرة إلى منتج حقيقي."
        : "Tell us what you're building — we'll help turn it into a real product.",
    path: "/contact",
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const t = dict.contact;
  const c = siteConfig.contact;

  const channels = [
    { icon: Mail, label: t.direct.email, value: c.email, href: `mailto:${c.email}`, ltr: true },
    { icon: MessageCircle, label: t.direct.whatsapp, value: "WhatsApp", href: c.whatsapp, ltr: false },
    { icon: ArrowUpRight, label: t.direct.linkedin, value: "LinkedIn", href: c.linkedin, ltr: false },
    { icon: MapPin, label: t.direct.location, value: locale === "ar" ? c.location.ar : c.location.en, href: undefined, ltr: false },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20">
        <Reveal>
          <Badge variant="brand" className="font-mono">{t.eyebrow}</Badge>
        </Reveal>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{t.title}</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{t.body}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <ContactForm locale={locale} dict={dict} />
          </Reveal>
          <Reveal delay={120}>
            <aside className="h-fit rounded-lg border border-border bg-card p-6" aria-label={t.direct.title}>
              <h2 className="font-semibold tracking-tight">{t.direct.title}</h2>
              <ul className="mt-4 space-y-3">
                {channels.map((ch) => (
                  <li key={ch.label} className="flex items-center gap-3 text-sm">
                    <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-background">
                      <ch.icon className="size-4 text-brand" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{ch.label}</span>
                      {ch.href ? (
                        <a href={ch.href} target={ch.href.startsWith("http") ? "_blank" : undefined} rel={ch.href.startsWith("http") ? "noreferrer" : undefined} dir={ch.ltr ? "ltr" : undefined} className="font-medium hover:text-brand hover:underline">
                          {ch.value}
                        </a>
                      ) : (
                        <span className="font-medium">{ch.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-start gap-2 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                <Clock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                {t.direct.response}
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
