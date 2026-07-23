export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  publishedAt: string; // ISO date, e.g. "2026-01-01"
  category: string;
  /** Markdown body */
  body: string;
}
