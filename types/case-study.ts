export interface CaseStudyLink {
  label: "Spotify" | "Apple Podcasts" | "YouTube" | "Website";
  url: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  attribution: string;
}

export interface CaseStudy {
  /** URL slug, e.g. "genetics-podcast" -> /work/genetics-podcast */
  slug: string;
  /** The business/person who hired Selected Frequencies */
  clientName: string;
  /** The podcast itself */
  showName: string;
  hostName?: string;
  /** One-line description of the show, shown on index + teaser cards */
  oneLiner: string;
  /** Longer-form paragraph rendered as an "About the show" section on the
   *  case study page — the extra depth Google's guidance on thin content
   *  calls for. Optional so existing shorter case studies aren't broken. */
  description?: string;
  /** Specific services provided for this client (not the generic service list) */
  services: string[];
  /** Results/outcome copy — placeholder until client supplies metrics */
  outcome?: string;
  testimonial?: CaseStudyTestimonial;
  links: CaseStudyLink[];
  /** Path under /public, e.g. /images/clients/genetics-podcast.png.
   *  Optional — CaseStudyCard and the case study page both render fine
   *  without one, so clients without real artwork yet aren't blocked. */
  logo?: string;
  logoAlt?: string;
  /** Path under /public for the case study hero/cover image */
  coverImage?: string;
  coverImageAlt?: string;
  /** Hex color sampled from the show's own cover art — used as the top
   *  of the case study hero's gradient (fades to brand navy), Spotify
   *  show-page style. Falls back to plain navy if omitted. */
  themeColor?: string;
  /** Show in home page teasers + logo strip */
  featured: boolean;
  category: "flagship" | "archive";
}

export interface ClientRosterEntry {
  slug: string;
  clientName: string;
  showName: string;
  hostName?: string;
  /** Optional — the /work index renders text cards, so a logo is only
   *  needed once real artwork exists for the client. */
  logo?: string;
  logoAlt?: string;
  /** Whether a full /work/[slug] case study page exists yet */
  hasCaseStudy: boolean;
}
