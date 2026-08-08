// data/affiliate-links.ts
//
// TODO (JAMES): paste real affiliate URLs here. Until a product has one, the
// AffiliateLink component renders its label as PLAIN TEXT rather than a link —
// so nothing broken or dead ever ships, and the moment you fill a URL in the
// links appear everywhere that product is mentioned.
//
// Do not inline affiliate URLs in article files. One place, so the programme,
// tracking tag, or storefront can be swapped in a single edit.
//
// When you add them:
//   • Amazon Associates requires the disclosure to be prominent — the article
//     template already renders one above the first link (see AffiliateDisclosure).
//   • Keep the tracking tag in the URL you paste; the component doesn't add one.

export interface AffiliateProduct {
  id: string;
  /** Human label used as the link text default */
  name: string;
  /** Empty string = no link yet; component degrades to plain text. */
  url: string;
}

export const affiliateLinks: Record<string, AffiliateProduct> = {
  "ath-m30x": {
    id: "ath-m30x",
    name: "Audio-Technica ATH-M30x",
    url: "", // TODO (JAMES): affiliate URL
  },
  "mdr-7506": {
    id: "mdr-7506",
    name: "Sony MDR-7506",
    url: "", // TODO (JAMES): affiliate URL
  },
  "hd-25": {
    id: "hd-25",
    name: "Sennheiser HD 25",
    url: "", // TODO (JAMES): affiliate URL
  },
  "monoprice-110010": {
    id: "monoprice-110010",
    name: "Monoprice 110010",
    url: "", // TODO (JAMES): affiliate URL
  },
};

/** True once at least one product has a real URL — gates the disclosure. */
export const hasAnyAffiliateLinks = Object.values(affiliateLinks).some(
  (p) => p.url.trim().length > 0
);

export function getAffiliate(id: string): AffiliateProduct | undefined {
  return affiliateLinks[id];
}
