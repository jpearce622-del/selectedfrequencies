/**
 * Schema for the commercial service landing pages under /services/[slug].
 *
 * Typed TypeScript objects rather than MDX, deliberately:
 *
 *  1. The repo already stores every other content type this way (blog, case
 *     studies, roadmap, pricing). Adding MDX would mean a second content
 *     system and a build dependency to maintain, for no gain.
 *  2. These pages are structured, not prose. Deliverable lists, ordered
 *     process steps, objection pairs, a pricing block that switches mode —
 *     all of that is data with a shape, and a shape is what a type checks.
 *  3. It makes the anti-cannibalisation rules enforceable in code. A build
 *     -time assertion can refuse two pages that share a primary keyword or
 *     an FAQ question. MDX frontmatter cannot do that, and a rule nobody
 *     can break beats a rule written in a brief.
 *
 * Adding page four means adding one file and one line to the index. The
 * template is never touched.
 */

/** Sections a page can render, in whatever order the content file lists. */
export type ServiceSectionId =
  | "problem"
  | "included"
  | "how-it-works"
  | "objections"
  | "proof"
  | "pricing"
  | "faq";

export interface ServiceProblem {
  heading: string;
  /** Paragraphs. Written in the buyer's language, not ours. */
  body: string[];
}

export interface ServiceDeliverable {
  title: string;
  /** Concrete detail. "Chapters formatted for Apple, Spotify and YouTube". */
  detail: string;
}

export interface ServiceIncluded {
  heading: string;
  intro?: string;
  items: ServiceDeliverable[];
  /** Optional line under the list, e.g. what is deliberately not included. */
  footnote?: string;
}

export interface ServiceStep {
  title: string;
  body: string;
}

export interface ServiceHowItWorks {
  heading: string;
  intro?: string;
  steps: ServiceStep[];
}

export interface ServiceObjection {
  /** Phrased as the buyer would actually ask it, in their words. */
  question: string;
  answer: string;
}

export interface ServiceObjections {
  heading: string;
  intro?: string;
  items: ServiceObjection[];
}

export interface ServiceProof {
  heading: string;
  /** Case study slugs to surface. Rendered from real case study data. */
  caseStudySlugs: string[];
  /**
   * Copy above the case studies. Where a claim needs a metric James hasn't
   * supplied, the string carries an explicit [PLACEHOLDER — …] marker and
   * the renderer strips the whole block rather than publishing the marker.
   */
  intro?: string;
}

/**
 * Pricing block. A discriminated union so a page either publishes a
 * starting-from figure or asks for an enquiry — never a half-built third
 * state, and never a number nobody has decided on.
 */
export type ServicePricing =
  | {
      mode: "from";
      heading: string;
      /** Integer in GBP. */
      amount: number;
      /** e.g. "per episode", "per month". */
      unit: string;
      body?: string;
      /** Small print under the figure. */
      caveat?: string;
    }
  | {
      mode: "enquiry";
      heading: string;
      body: string;
      caveat?: string;
    };

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceCta {
  heading: string;
  body: string;
  /** Specific to the page. Never "Get in touch". */
  buttonLabel: string;
  /** Optional secondary line under the button. */
  note?: string;
}

export interface ServicePage {
  slug: string;
  /**
   * The one term this page is for. Enforced unique across all pages by
   * assertServicePagesAreDistinct() in lib/service-pages.ts.
   */
  primaryKeyword: string;
  /** 3–5 variants. Also checked for collisions across pages. */
  supportingKeywords: string[];
  /** Internal note on who this page is written for. Not rendered. */
  buyer: string;
  seo: {
    /** Under 60 chars including the " | Selected Frequencies" suffix. */
    title: string;
    /** Under 155 chars, contains the primary keyword. */
    metaDescription: string;
  };
  h1: string;
  subheadline: string;
  /** Which sections render, and in what order. */
  sectionOrder: ServiceSectionId[];
  problem: ServiceProblem;
  included: ServiceIncluded;
  howItWorks: ServiceHowItWorks;
  objections: ServiceObjections;
  proof: ServiceProof;
  pricing: ServicePricing;
  faqs: ServiceFaq[];
  cta: ServiceCta;
  /**
   * Internal links. One case study and one blog post minimum, chosen for
   * relevance to this buyer rather than for link volume.
   */
  internalLinks: {
    caseStudySlug: string;
    blogSlug: string;
    /** Optional prose linking to a sibling service page, where genuinely
     *  relevant. Left empty when it isn't — a forced cross-link between two
     *  pages targeting different buyers helps neither. */
    relatedServiceSlug?: string;
  };
  /**
   * Tags the enquiry so James can see which page generated it. Sent with
   * the form and printed in the notification subject.
   */
  formTag: string;
  /** Service schema: what this is called in structured data. */
  schemaServiceName: string;
}
