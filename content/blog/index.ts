import type { BlogPost } from "@/types/blog";
import { podcastAnalyticsMetricsThatMatter } from "./podcast-analytics-metrics-that-matter";
import { howToBookGreatPodcastGuests } from "./how-to-book-great-podcast-guests";
import { podcastAudioQualityGuide } from "./podcast-audio-quality-guide";
import { repurposePodcastContent } from "./repurpose-podcast-content";
import { podcastSeoGuide } from "./podcast-seo-guide";
import { whyBitcoinPodcastsWork } from "./why-bitcoin-podcasts-work";
import { howToStartAPodcastIn2026 } from "./how-to-start-a-podcast-in-2026";
import { descriptVsRiverside } from "./descript-vs-riverside";
import { founderPodcastTimePerWeek } from "./founder-podcast-time-per-week";
import { bestBitcoinPodcasts } from "./best-bitcoin-podcasts";
import { whyIsntMyPodcastGrowing } from "./why-isnt-my-podcast-growing";
import { howToWritePodcastShowNotes } from "./how-to-write-podcast-show-notes";
import { howToGetPodcastSponsors } from "./how-to-get-podcast-sponsors";
import { monoprice110010Review } from "./monoprice-110010-review";
import { bestHeadphonesForPodcasting } from "./best-headphones-for-podcasting";
import { athM30xReview } from "./audio-technica-ath-m30x-review";
import { sonyMdr7506Review } from "./sony-mdr-7506-review";
import { sennheiserHd25Review } from "./sennheiser-hd-25-review";

// Newest-first ordering is handled by getAllPosts() (sorts on publishedAt).
export const posts: BlogPost[] = [
  bestHeadphonesForPodcasting,
  sonyMdr7506Review,
  athM30xReview,
  sennheiserHd25Review,
  monoprice110010Review,
  howToGetPodcastSponsors,
  howToWritePodcastShowNotes,
  whyIsntMyPodcastGrowing,
  bestBitcoinPodcasts,
  founderPodcastTimePerWeek,
  descriptVsRiverside,
  howToStartAPodcastIn2026,
  whyBitcoinPodcastsWork,
  podcastAnalyticsMetricsThatMatter,
  howToBookGreatPodcastGuests,
  podcastAudioQualityGuide,
  repurposePodcastContent,
  podcastSeoGuide,
];
