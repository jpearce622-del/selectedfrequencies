import type { CaseStudy } from "@/types/case-study";
import { geneticsPodcast } from "@/content/case-studies/genetics-podcast";
import { theAssembly } from "@/content/case-studies/the-assembly";
import { bitcoinAndTheLongGame } from "@/content/case-studies/bitcoin-and-the-long-game";
import { bitcoinCollective } from "@/content/case-studies/bitcoin-collective";
import { careerChangeDiaries } from "@/content/case-studies/career-change-coach";
import { outthinkers } from "@/content/case-studies/outthinkers";
import { strategyAtScale } from "@/content/case-studies/strategy-at-scale";
import { chiefStrategyOfficerPodcast } from "@/content/case-studies/chief-strategy-officer-podcast";

// Add one import + array entry per client as their case study copy is supplied.
const allCaseStudies: CaseStudy[] = [
  geneticsPodcast,
  theAssembly,
  bitcoinAndTheLongGame,
  bitcoinCollective,
  careerChangeDiaries,
  outthinkers,
  strategyAtScale,
  chiefStrategyOfficerPodcast,
];

export function getAllCaseStudies(): CaseStudy[] {
  return allCaseStudies;
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return allCaseStudies.filter((study) => study.featured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return allCaseStudies.find((study) => study.slug === slug);
}
