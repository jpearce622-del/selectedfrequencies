export interface CaseStudyLink {
  label: "Spotify" | "Apple Podcasts" | "YouTube" | "Website";
  url: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  attribution: string;
}

/**
 * A sample of the work itself, shown on the case study page.
 *
 * Self-hosted rather than embedded from YouTube on purpose: an iframe embed
 * loads third-party scripts and sets cookies before anyone presses play, on a
 * site that deliberately runs no such tracking elsewhere. A local MP4 with
 * `preload="none"` transfers nothing until the visitor chooses to watch, and
 * `sourceUrl` still credits where the clip is published.
 */
export interface CaseStudyVideo {
  /** Path under /public, e.g. /video/outthinkers-clip.mp4 */
  src: string;
  /** Poster frame under /public — shown before playback, so nothing loads. */
  poster: string;
  /** Describes what the clip demonstrates, not just what it is. */
  caption: string;
  /** Alt text for the poster image. */
  posterAlt: string;
  /** Aspect ratio, e.g. "9/16" for a vertical short. */
  aspect?: string;
  /** Where the clip is publicly published, if anywhere. */
  sourceUrl?: string;
  sourceLabel?: string;
}

/**
 * Continuity record for a show. This is the block the whole site's
 * positioning rests on, so the rule is strict: every field must be something
 * James can evidence, and `stillRunning` must be re-checked against the feed
 * before it is claimed.
 *
 * Optional as a whole. A case study without one renders exactly as before,
 * which is deliberate — a thin "Still running" section invented to fill the
 * template would undermine the three real ones.
 */
export interface CaseStudyContinuity {
  /**
   * True when the show was already running and James took it over. False
   * when he was there from (or before) episode one.
   *
   * Not a cosmetic distinction: a takeover means the host had a producer,
   * chose to move, and then chose not to move again. That is the strongest
   * form of the retention claim and it earns a visible tag.
   */
  takeover: boolean;
  /** e.g. "Episode 65, June 2021" or "From launch, April 2023". */
  joined: string;
  /** e.g. "Fortnightly". Present tense — what it does now. */
  cadence: string;
  /** Episodes delivered by Selected Frequencies. Feed-countable. */
  episodesDelivered?: number;
  /** e.g. "5 years". Shown alongside the episode count. */
  duration: string;
  /**
   * Whether the show is still publishing. False is allowed and is sometimes
   * the honest answer (a client ending a show is normal); it simply drops
   * the "still running" framing rather than pretending.
   */
  stillRunning: boolean;
  /** One line for the "Still running" section. */
  note?: string;
}

export interface CaseStudy {
  /** URL slug, e.g. "genetics-podcast" -> /work/genetics-podcast */
  slug: string;
  /** The business/person who hired Selected Frequencies */
  clientName: string;
  /** The podcast itself */
  showName: string;
  /** Shorter name used only in the <title> tag. The page title is built as
   *  "<name> — Case Study | Selected Frequencies"; the suffix alone is 36
   *  characters, so show names longer than ~24 push the title past Google's
   *  ~60-character display limit and get truncated. Set this for long names
   *  and leave it unset for short ones. */
  metaTitleName?: string;
  hostName?: string;
  /** One-line description of the show, shown on index + teaser cards */
  oneLiner: string;
  /** Search-result description, 150–160 chars. Falls back to a generated
   *  summary (see lib/case-studies.ts) when not set. */
  metaDescription?: string;
  /** Longer-form paragraph rendered as an "About the show" section on the
   *  case study page — the extra depth Google's guidance on thin content
   *  calls for. Optional so existing shorter case studies aren't broken. */
  description?: string;
  /**
   * How the engagement actually works and how it grew — rendered as its own
   * "How we help" section, separate from `description`, which is about the
   * show rather than the work. Blank-line-separated paragraphs.
   */
  engagement?: string;
  /** Specific services provided for this client (not the generic service list) */
  services: string[];
  /** Results/outcome copy — placeholder until client supplies metrics */
  outcome?: string;
  testimonial?: CaseStudyTestimonial;
  /** Optional sample of the actual output — worth more than describing it. */
  video?: CaseStudyVideo;
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
  /**
   * Continuity record. Drives the "taken over mid-run" tag and the "Still
   * running" section, which the case studies previously had nowhere.
   */
  continuity?: CaseStudyContinuity;
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
