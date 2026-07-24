import type { Metadata } from "next";

export const siteConfig = {
  name: "Selected Frequencies",
  // TODO: confirm final production domain before launch
  url: "https://selectedfrequencies.com",
  positioning:
    "Selected Frequencies is a full-service podcast editing and production studio — editing, show notes, and distribution, end to end — with deep experience in Bitcoin and finance shows.",
};

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    // Plain string: the root layout's title.template appends "| Selected
    // Frequencies" automatically — don't duplicate it here.
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}
