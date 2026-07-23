export interface Show {
  name: string;
  artwork: string;
  /** Slug of a live case study page, if one exists */
  caseStudySlug?: string;
}

// Shows and artists Selected Frequencies has produced for — drives the
// "Trusted by shows worldwide" artwork marquee on the homepage. Real
// cover art / press imagery, supplied by James (originally scraped from
// the old site's gallery, then curated into public/images/clients/).
export const shows: Show[] = [
  { name: "The Genetics Podcast (Sano Genetics)", artwork: "/images/clients/sano-genetics.png", caseStudySlug: "genetics-podcast" },
  { name: "Martin Garrix", artwork: "/images/clients/martin-garrix.png" },
  { name: "Complete Human", artwork: "/images/clients/complete-human.png" },
  { name: "Tomorrowland", artwork: "/images/clients/tomorrowland-1.png" },
  { name: "The Real Estate Mindset", artwork: "/images/clients/real-estate-mindset.jpg" },
  { name: "Heldeep Radio (Oliver Heldens)", artwork: "/images/clients/heldeep-radio.jpeg" },
  { name: "Biohacking Beauty (Young Goose)", artwork: "/images/clients/young-goose.png" },
  { name: "Total Mental Performance", artwork: "/images/clients/total-mental-performance.jpeg" },
  { name: "The Lively Show", artwork: "/images/clients/the-lively-show.jpeg" },
  { name: "Collaection Radio (Felix Jaehn)", artwork: "/images/clients/felix-jaehn-collection-radio.jpg" },
  { name: "Dialed Health", artwork: "/images/clients/dialed-health.jpeg" },
  { name: "loc.tax", artwork: "/images/clients/loc-tax.png" },
  { name: "Heartfeldt Radio (Sam Feldt)", artwork: "/images/clients/heartfeldt-radio-opener.jpeg" },
  { name: "EYR Podcast", artwork: "/images/clients/eyr-podcast.png" },
  { name: "FasCat", artwork: "/images/clients/fascat.png" },
  { name: "Maxximize On Air", artwork: "/images/clients/maxximize-on-air.jpeg" },
  { name: "Tomorrowland One World Radio", artwork: "/images/clients/tomorrowland-2.jpeg" },
  { name: "Aaron Alexander", artwork: "/images/clients/aaron-alexander.jpeg" },
  { name: "Oliver Heldens", artwork: "/images/clients/oliver-heldens.jpeg" },
  { name: "Sam Feldt", artwork: "/images/clients/sam-feldt.jpeg" },
  { name: "Nervo", artwork: "/images/clients/nervo.jpeg" },
  { name: "Brohug", artwork: "/images/clients/brohug.png" },
  { name: "Florian Picasso", artwork: "/images/clients/florian-picasso.jpeg" },
  { name: "INQ", artwork: "/images/clients/inq.jpeg" },
];
