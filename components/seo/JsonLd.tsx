import { siteConfig } from "@/lib/metadata";

// LocalBusiness/ProfessionalService schema for the homepage.
// TODO: fill in real address/phone/email once decided whether to
// publish them publicly (sole trader — optional under schema.org).
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.positioning,
    // address: { "@type": "PostalAddress", addressCountry: "GB" }, // TODO
    // telephone: "", // TODO
    // email: "", // TODO
    areaServed: "Global",
    priceRange: "$$", // TODO: confirm once pricing approach is decided
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
