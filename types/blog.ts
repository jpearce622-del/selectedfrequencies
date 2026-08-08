export interface BlogImage {
  /** Path under /public, e.g. /images/blog/analytics-hero.svg */
  src: string;
  alt: string;
  /** Optional caption rendered under the image */
  caption?: string;
  /** Optional credit line, e.g. "Selected Frequencies" or a photographer */
  credit?: string;
}

/**
 * Interactive widgets a section can embed.
 *
 * A key rather than a component, because content modules are plain data —
 * importing a React component into one would drag client code into every
 * consumer of the blog index, including the sitemap. The renderer maps these
 * to dynamically-imported components instead.
 */
export type InteractiveId =
  | "growth-diagnostic"
  | "discovery-leak"
  | "show-notes-anatomy";

export interface BlogSection {
  /** Anchor id for the table of contents + deep links, e.g. "why-it-matters" */
  id: string;
  /** Section heading (rendered as an <h2>, and the TOC label) */
  heading: string;
  /** Markdown body for the section */
  body: string;
  /** Optional figure rendered at the top of the section */
  image?: BlogImage;
  /**
   * Optional interactive rendered after the section body. The article must
   * still read completely without it — these are enhancements, and they don't
   * render at all with JavaScript disabled.
   */
  interactive?: InteractiveId;
}

export interface BlogFaq {
  question: string;
  /** Plain text. Rendered visibly AND emitted as FAQPage schema — the two
   *  must always match, which is why there is one source for both. */
  answer: string;
}

/**
 * Product review data. Emits Review JSON-LD with the product as
 * `itemReviewed`.
 *
 * `rating` is optional and must ONLY be set when the article visibly displays
 * that exact score — schema may never claim a rating the reader can't see.
 * Omitting it drops `reviewRating` from the markup rather than inventing one.
 */
export interface BlogReview {
  productName: string;
  /** Manufacturer / brand, e.g. "Monoprice" */
  brand?: string;
  /** Same score shown on the page, out of `ratingMax` */
  rating?: number;
  ratingMax?: number;
  /** One-line summary of the verdict, mirroring the article */
  verdict: string;
}

export interface BlogReference {
  /** Source name / title shown as the link text */
  label: string;
  url: string;
}

export interface Author {
  name: string;
  /** Job title, e.g. "Head of Content Marketing" */
  role: string;
  /** Short first-person bio shown in the author card */
  bio: string;
  /** Path under /public to a square headshot (rendered in a circle) */
  avatar: string;
  avatarAlt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Shorter title for the <title> tag (≤38 chars so it fits with the
   *  " | Selected Frequencies" suffix under 60). Falls back to `title`. */
  seoTitle?: string;
  metaDescription: string;
  publishedAt: string; // ISO date, e.g. "2026-01-01"
  updatedAt?: string; // ISO date
  category: string;
  author: Author;
  /** Human-readable reading time, e.g. "9 min read" */
  readingTime: string;
  /** Hero / cover image */
  coverImage: BlogImage;
  /** Opening lede, rendered above the table of contents (markdown) */
  intro: string;
  /** Body content, structured so the TOC and heading anchors stay in sync */
  sections: BlogSection[];
  /** Optional "key takeaways" summary bullets */
  keyTakeaways?: string[];
  /**
   * Optional FAQ. Rendered as visible HTML and as FAQPage structured data
   * from the same array — Google requires the two to correspond, and keeping
   * one source is the only way to guarantee they can't drift.
   */
  faqs?: BlogFaq[];
  /** Optional source / reference links */
  references?: BlogReference[];
  /** Set on product reviews — emits Review JSON-LD alongside BlogPosting. */
  review?: BlogReview;
}
