import type { Metadata } from "next";

export const siteConfig = {
  name: "Selected Frequencies",
  // TODO: confirm final production domain before launch
  url: "https://selectedfrequencies.com",
  positioning:
    "Podcast production for expert and thought-leadership shows — founders, coaches, and finance voices.", // TODO: pick from home page headline options
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
