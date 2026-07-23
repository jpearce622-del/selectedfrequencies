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
