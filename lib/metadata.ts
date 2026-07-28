import type { Metadata } from "next";

export const siteConfig = {
  name: "Selected Frequencies",
  url: "https://selectedfrequencies.com",
  positioning:
    "Selected Frequencies is a full-service podcast editing and production studio — editing, show notes, and distribution, end to end — with deep experience in Bitcoin and finance shows.",
  founder: "James Pearce",
  foundingDate: "2019",
  /** Default social share image (1200×630). Replace with a designed asset when one exists. */
  ogImage: "/og-default.jpg",
  ogImageAlt:
    "Selected Frequencies — podcast editing and production. Editing, show notes, and distribution, handled.",
  // No public social profiles are referenced anywhere in the repo, so
  // Organization.sameAs is deliberately omitted rather than invented.
  sameAs: [] as string[],
};

/** Turn a site-relative path into the absolute URL crawlers and social scrapers need. */
export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${siteConfig.url}${path}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  /** Page-specific share image (site-relative or absolute). Falls back to the site default. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = absoluteUrl(image ?? siteConfig.ogImage);
  const alt = imageAlt ?? siteConfig.ogImageAlt;

  return {
    // Plain string: the root layout's title.template appends "| Selected
    // Frequencies" automatically — don't duplicate it here.
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage, alt }],
    },
  };
}
