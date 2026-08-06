import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
import { getAllCaseStudies } from "@/lib/case-studies";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/work/archive",
    "/about",
    "/blog",
    "/bitcoin",
    "/podcast-editing-cost-calculator",
    "/tools",
    "/tools/show-notes-generator",
    // Only the tool itself. /tools/feed-checker/r/* is noindex by design —
    // those are other people's feeds and they expire within hours.
    "/tools/feed-checker",
    "/podcast-launch-roadmap",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = getAllCaseStudies().map((study) => ({
    url: `${siteConfig.url}/work/${study.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
