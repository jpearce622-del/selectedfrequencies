import type { Metadata } from "next";

export const siteConfig = {
  name: "Selected Frequencies",
  url: "https://selectedfrequencies.com",
  positioning:
    "Selected Frequencies is a full-service podcast editing and production studio — editing, show notes, and distribution, end to end — with deep experience in Bitcoin and finance shows.",
  /**
   * THE canonical positioning line. Two separate claims doing two jobs:
   * where the studio is (fixed, factual, earns geo relevance) and who it
   * serves (unbounded). Import this rather than restating it — variants
   * drifting page to page is what this constant exists to prevent.
   *
   * Ireland is deliberately absent from the client list: there are no Irish
   * clients, and an unearned "clients across Ireland" is worse than none.
   * Irish relevance comes from the Northern Ireland base and off-site work.
   */
  positioningLine:
    "UK-based podcast production for expert-led shows — working with clients across the UK, the US and Europe.",
  /** Short form for tight spaces (footer) where the full line won't sit. */
  positioningShort: "Podcast production, UK — working worldwide",
  /**
   * Region only. No street address anywhere: sole trader, home office, and
   * no premises clients ever visit. Banbridge is ~25 minutes from Belfast,
   * so "near Belfast" is the honest way to give the location a recognisable
   * anchor without claiming to be in the city.
   */
  baseRegion: "Northern Ireland",
  baseTown: "Banbridge",
  baseNearCity: "Belfast",
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
