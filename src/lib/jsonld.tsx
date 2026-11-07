import { siteConfig, type SiteLocale } from "@/lib/site";

type JsonLd = Record<string, unknown>;

const base = () => siteConfig.url.replace(/\/$/, "");

/** Renders one or more JSON-LD objects as a script tag (server component safe). */
export function JsonLdScript({ data }: { data: JsonLd | JsonLd[] }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function organizationJsonLd(locale: SiteLocale): JsonLd {
  const { contact } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${base()}/#organization`,
    name: siteConfig.name,
    url: base(),
    logo: `${base()}/logo.jpg`,
    description: siteConfig.description[locale],
    email: contact.email,
    sameAs: [contact.linkedin, contact.github],
    areaServed: ["EG", "SA", "Middle East", "North Africa"],
    knowsLanguage: ["en", "ar"],
    address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  };
}

export function websiteJsonLd(locale: SiteLocale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base()}/#website`,
    url: `${base()}/${locale}`,
    name: siteConfig.name,
    inLanguage: locale,
    publisher: { "@id": `${base()}/#organization` },
  };
}

export function breadcrumbJsonLd(locale: SiteLocale, crumbs: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${base()}/${locale}${c.path}`,
    })),
  };
}

export function caseStudyJsonLd(
  locale: SiteLocale,
  p: { slug: string; name: string; description: string; year: string; technologies: string[]; url?: string },
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${base()}/${locale}/work/${p.slug}#work`,
    name: p.name,
    description: p.description,
    inLanguage: locale,
    dateCreated: p.year,
    keywords: p.technologies.join(", "),
    creator: { "@id": `${base()}/#organization` },
    ...(p.url ? { sameAs: p.url } : {}),
  };
}
