import { siteConfig, absoluteUrl } from "@/lib/metadata";

const ORG_ID = `${siteConfig.url}/#organization`;

/**
 * Sitewide Organization + ProfessionalService schema, rendered once in the
 * root layout so every page carries it.
 *
 * Deliberate omissions — schema must never claim more than we can back up:
 *  - `sameAs` is omitted because no social profiles are referenced in the repo.
 *  - No `address` / `telephone`: this is a remote studio with no published
 *    street address, so it's modelled as a service-area business. Adding a
 *    locality we can't evidence is a real local-SEO risk, not a win.
 *    TODO (James): if you want to rank for a specific place, supply the
 *    business address you're happy to publish and we'll add PostalAddress.
 */
export function OrganizationJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.ogImage),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.positioning,
    foundingDate: siteConfig.foundingDate,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: "Founder & Podcast Producer",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Place", name: "Worldwide" },
    ],
    knowsAbout: [
      "Podcast editing",
      "Podcast production",
      "Show notes",
      "Podcast distribution",
      "Bitcoin podcasts",
      "Finance podcasts",
    ],
    ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}

/** Person schema for James — used on /about, where the bio is visible. */
export function FounderJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.founder,
    jobTitle: "Founder & Podcast Producer",
    url: `${siteConfig.url}/about`,
    worksFor: { "@id": ORG_ID, "@type": "Organization", name: siteConfig.name },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}

/** Breadcrumb trail. Pass the real navigation path, excluding Home. */
export function BreadcrumbJsonLd({
  trail,
}: {
  trail: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.name,
        item: `${siteConfig.url}${t.path}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
