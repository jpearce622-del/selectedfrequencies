import type { BlogPost } from "@/types/blog";
import { posts } from "@/content/blog";

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

/**
 * Posts to link from the bottom of an article. Same-category first, then the
 * rest, and the window is offset by the post's own index so consecutive posts
 * surface different neighbours — slicing from the top would hand every post
 * the same trio and leave the tail with one inbound link each, which is the
 * problem this exists to solve.
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const all = getAllPosts();
  const index = all.findIndex((p) => p.slug === slug);
  const current = index >= 0 ? all[index] : undefined;
  const others = all.filter((p) => p.slug !== slug);
  if (!current || others.length === 0) return others.slice(0, limit);

  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  const pool = [...sameCategory, ...rest];
  const offset = index % pool.length;

  return Array.from({ length: Math.min(limit, pool.length) }, (_, i) =>
    pool[(offset + i) % pool.length]
  );
}
