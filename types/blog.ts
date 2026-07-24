export interface BlogImage {
  /** Path under /public, e.g. /images/blog/analytics-hero.svg */
  src: string;
  alt: string;
  /** Optional caption rendered under the image */
  caption?: string;
  /** Optional credit line, e.g. "Selected Frequencies" or a photographer */
  credit?: string;
}

export interface BlogSection {
  /** Anchor id for the table of contents + deep links, e.g. "why-it-matters" */
  id: string;
  /** Section heading (rendered as an <h2>, and the TOC label) */
  heading: string;
  /** Markdown body for the section */
  body: string;
  /** Optional figure rendered at the top of the section */
  image?: BlogImage;
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
  /** Optional source / reference links */
  references?: BlogReference[];
}
