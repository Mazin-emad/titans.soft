import { siteConfig, type SiteLocale } from "@/lib/site";

type JsonLd = Record<string, unknown>;

const base = () => siteConfig.url.replace(/\/$/, "");
const ORG_ID = () => `${base()}/#organization`;

/** Renders JSON-LD as a script tag. "<" is escaped so content can never close the tag. */
export function JsonLdScript({ data }: { data: JsonLd | JsonLd[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function organizationJsonLd(locale: SiteLocale): JsonLd {
  const { contact } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID(),
    name: siteConfig.name,
    alternateName: "تايتنز سوفت",
    url: base(),
    logo: { "@type": "ImageObject", url: `${base()}/brand/mark.png`, width: 256, height: 256 },
    image: `${base()}/logo.jpg`,
    description: siteConfig.description[locale],
    email: contact.email,
    ...(contact.verified ? { telephone: contact.phoneDisplay } : {}),
    sameAs: [contact.linkedin, contact.github],
    areaServed: [
      { "@type": "Country", name: "Egypt" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Place", name: "Middle East and North Africa" },
    ],
    knowsLanguage: ["en", "ar"],
    address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
    knowsAbout: [
      "Custom software development",
      "Web development",
      "Mobile app development",
      "Desktop software development",
      "ERP systems",
      "API development",
      "AI integration",
    ],
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
    publisher: { "@id": ORG_ID() },
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

export function faqJsonLd(items: { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function serviceJsonLd(
  locale: SiteLocale,
  s: { slug: string; name: string; description: string; offers: string[] },
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${base()}/${locale}/services/${s.slug}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: `${base()}/${locale}/services/${s.slug}`,
    inLanguage: locale,
    provider: { "@id": ORG_ID() },
    areaServed: ["EG", "SA", "AE", "KW", "QA", "BH", "OM", "JO"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.name,
      itemListElement: s.offers.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o } })),
    },
  };
}

export function itemListJsonLd(locale: SiteLocale, items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: `${base()}/${locale}${it.path}`,
    })),
  };
}

export function caseStudyJsonLd(
  locale: SiteLocale,
  p: { slug: string; name: string; description: string; year: string; technologies: string[]; url?: string; image?: string },
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
    creator: { "@id": ORG_ID() },
    ...(p.image ? { image: `${base()}${p.image}` } : {}),
    ...(p.url ? { sameAs: p.url } : {}),
  };
}
