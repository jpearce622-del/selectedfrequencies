export interface Company {
  name: string;
  logo: string;
}

// Companies James has produced audio for — distinct from the podcast
// client roster in content/clients.ts. Logos here are simple monochrome
// recreations (not exact trademark reproductions of official brand
// assets), consistent with the site's grayscale "trusted by" treatment.
export const companies: Company[] = [
  { name: "Insomniac", logo: "/images/companies/insomniac.svg" },
  { name: "Universal", logo: "/images/companies/universal.svg" },
  { name: "BBC", logo: "/images/companies/bbc.svg" },
  { name: "Google", logo: "/images/companies/google.svg" },
];
