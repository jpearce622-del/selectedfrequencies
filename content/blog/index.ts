import type { BlogPost } from "@/types/blog";
import { podcastAnalyticsMetricsThatMatter } from "./podcast-analytics-metrics-that-matter";
import { howToBookGreatPodcastGuests } from "./how-to-book-great-podcast-guests";
import { podcastAudioQualityGuide } from "./podcast-audio-quality-guide";
import { repurposePodcastContent } from "./repurpose-podcast-content";
import { podcastSeoGuide } from "./podcast-seo-guide";
import { whyBitcoinPodcastsWork } from "./why-bitcoin-podcasts-work";

// Newest-first ordering is handled by getAllPosts() (sorts on publishedAt).
export const posts: BlogPost[] = [
  whyBitcoinPodcastsWork,
  podcastAnalyticsMetricsThatMatter,
  howToBookGreatPodcastGuests,
  podcastAudioQualityGuide,
  repurposePodcastContent,
  podcastSeoGuide,
];
