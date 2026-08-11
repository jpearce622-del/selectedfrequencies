import type { ServicePage } from "@/types/service-page";
import { whiteLabelPodcastEditing } from "./white-label-podcast-editing";
import { outsourcedPodcastProduction } from "./outsourced-podcast-production";
import { thoughtLeadershipPodcastProduction } from "./thought-leadership-podcast-production";

/**
 * Commercial service landing pages under /services/[slug].
 *
 * Adding a page (the fintech / biotech / VC / coaching variants coming
 * later) means adding one file and one line here. The template, the sitemap,
 * the /services hub and the schema all pick it up automatically.
 *
 * lib/service-pages.ts asserts on import that no two pages share a primary
 * keyword, a supporting keyword, an FAQ question or a form tag — so a new
 * page that would cannibalise an existing one fails the build rather than
 * quietly competing with it in search.
 */
export const servicePages: ServicePage[] = [
  whiteLabelPodcastEditing,
  outsourcedPodcastProduction,
  thoughtLeadershipPodcastProduction,
];
