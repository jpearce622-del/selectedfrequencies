import type { ServicePage } from "@/types/service-page";
import { whiteLabelPodcastEditing } from "./white-label-podcast-editing";
import { outsourcedPodcastProduction } from "./outsourced-podcast-production";
import { thoughtLeadershipPodcastProduction } from "./thought-leadership-podcast-production";
import { podcastProductionForSaasCompanies } from "./podcast-production-for-saas-companies";
import { executivePodcastProductionService } from "./executive-podcast-production-service";
import { monthlyPodcastEditingRetainer } from "./monthly-podcast-editing-retainer";
import { doneForYouPodcastProduction } from "./done-for-you-podcast-production";
import { podcastPostProductionServices } from "./podcast-post-production-services";
import { podcastRepurposingServiceB2b } from "./podcast-repurposing-service-b2b";

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
  // Buyer-type pages
  outsourcedPodcastProduction,
  thoughtLeadershipPodcastProduction,
  executivePodcastProductionService,
  whiteLabelPodcastEditing,
  // Vertical
  podcastProductionForSaasCompanies,
  // Scope and commercial-model pages
  doneForYouPodcastProduction,
  podcastPostProductionServices,
  monthlyPodcastEditingRetainer,
  // Downstream assets
  podcastRepurposingServiceB2b,
];
