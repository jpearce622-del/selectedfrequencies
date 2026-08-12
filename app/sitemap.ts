import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
import { getAllCaseStudies } from "@/lib/case-studies";
import { getAllPosts } from "@/lib/blog";
import { getAllServicePages } from "@/lib/service-pages";
import { getAllComparisonPages } from "@/lib/comparison-pages";

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
    "/podcast-sponsorship-calculator",
    "/tools",
    "/tools/show-notes-generator",
    // Only the tool itself. /tools/feed-checker/r/* is noindex by design —
    // those are other people's feeds and they expire within hours.
    "/tools/feed-checker",
    "/podcast-launch-roadmap",
    "/contact",
    "/compare",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  // Commercial landing pages. Derived rather than listed, so a new one is
  // in the sitemap the moment its content file exists.
  const serviceRoutes = getAllServicePages().map((page) => ({
    url: `${siteConfig.url}/services/${page.slug}`,
    lastModified: new Date(),
  }));

  // Competitor comparison pages. Derived for the same reason as the service
  // pages: a new one is in the sitemap as soon as its content file exists.
  const comparisonRoutes = getAllComparisonPages().map((page) => ({
    url: `${siteConfig.url}/compare/${page.slug}`,
    lastModified: new Date(page.verifiedOn),
  }));

  const caseStudyRoutes = getAllCaseStudies().map((study) => ({
    url: `${siteConfig.url}/work/${study.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...comparisonRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ];
}
