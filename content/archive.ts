export interface ArchiveItem {
  name: string;
  image: string;
  /** Set when a full /work/[slug] case study page exists for this item. */
  slug?: string;
}

// Earlier production work (pre-repositioning), pulled from the old Wix
// site's gallery — general podcasts plus EDM/radio production. Kept
// separate from the flagship case studies on /work, which focus on
// current expert & thought-leadership clients. Most items below now
// link through to a full /work/[slug] case study page (see
// content/case-studies/) rather than being logo-only — the handful
// without a slug don't have case study copy yet.
export const archiveItems: ArchiveItem[] = [
  { name: "Sano Genetics", image: "/images/clients/sano-genetics.png" },
  { name: "Total Mental Performance", image: "/images/clients/total-mental-performance.jpeg", slug: "tmp-podcast" },
  { name: "Aaron Alexander", image: "/images/clients/aaron-alexander.jpeg" },
  { name: "EYR Podcast", image: "/images/clients/eyr-podcast.png", slug: "embrace-your-real" },
  { name: "Martin Garrix", image: "/images/clients/martin-garrix.png", slug: "martin-garrix-show" },
  { name: "Felix Jaehn — Collaection Radio", image: "/images/clients/felix-jaehn-collection-radio.jpg", slug: "collaection-radio" },
  { name: "Heartfeldt Radio", image: "/images/clients/heartfeldt-radio-opener.jpeg", slug: "heartfeldt-radio" },
  { name: "Maxximize On Air", image: "/images/clients/maxximize-on-air.jpeg" },
  { name: "One World Radio", image: "/images/clients/tomorrowland-1.png", slug: "one-world-radio" },
  { name: "Dialed Health", image: "/images/clients/dialed-health.jpeg", slug: "dialed-health" },
  { name: "Oliver Heldens", image: "/images/clients/oliver-heldens.jpeg" },
  { name: "Brohug", image: "/images/clients/brohug.png", slug: "brohug" },
  { name: "Florian Picasso", image: "/images/clients/florian-picasso.jpeg" },
  { name: "Nervo", image: "/images/clients/nervo.jpeg" },
  { name: "INQ", image: "/images/clients/inq.jpeg" },
  { name: "Tomorrowland", image: "/images/clients/tomorrowland-2.jpeg", slug: "tomorrowland" },
  { name: "Sam Feldt", image: "/images/clients/sam-feldt.jpeg" },
  { name: "loc.tax", image: "/images/clients/loc-tax.png", slug: "loc-tax" },
  { name: "Young Goose", image: "/images/clients/young-goose.png", slug: "biohacking-beauty" },
  { name: "The Lively Show", image: "/images/clients/the-lively-show.jpeg", slug: "the-lively-show" },
  { name: "FasCat", image: "/images/clients/fascat.png", slug: "fascat-coaching" },
  { name: "Heldeep Radio", image: "/images/clients/heldeep-radio.jpeg", slug: "heldeep-radio" },
  { name: "Complete Human", image: "/images/clients/complete-human.png", slug: "complete-human-podcast" },
  { name: "Real Estate Mindset", image: "/images/clients/real-estate-mindset.jpg", slug: "real-estate-mindset" },
];
