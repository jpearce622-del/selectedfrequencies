import type { CaseStudy } from "@/types/case-study";
import { geneticsPodcast } from "@/content/case-studies/genetics-podcast";
import { theAssembly } from "@/content/case-studies/the-assembly";
import { bitcoinAndTheLongGame } from "@/content/case-studies/bitcoin-and-the-long-game";
import { bitcoinCollective } from "@/content/case-studies/bitcoin-collective";
import { careerChangeDiaries } from "@/content/case-studies/career-change-coach";
import { outthinkers } from "@/content/case-studies/outthinkers";
import { strategyAtScale } from "@/content/case-studies/strategy-at-scale";
import { chiefStrategyOfficerPodcast } from "@/content/case-studies/chief-strategy-officer-podcast";
import { tmpPodcast } from "@/content/case-studies/tmp-podcast";
import { embraceYourReal } from "@/content/case-studies/embrace-your-real";
import { collaectionRadio } from "@/content/case-studies/collaection-radio";
import { heartfeldtRadio } from "@/content/case-studies/heartfeldt-radio";
import { martinGarrixShow } from "@/content/case-studies/martin-garrix-show";
import { oneWorldRadio } from "@/content/case-studies/one-world-radio";
import { dialedHealth } from "@/content/case-studies/dialed-health";
import { brohug } from "@/content/case-studies/brohug";
import { tomorrowland } from "@/content/case-studies/tomorrowland";
import { locTax } from "@/content/case-studies/loc-tax";
import { biohackingBeauty } from "@/content/case-studies/biohacking-beauty";
import { theLivelyShow } from "@/content/case-studies/the-lively-show";
import { fascatCoaching } from "@/content/case-studies/fascat-coaching";
import { heldeepRadio } from "@/content/case-studies/heldeep-radio";
import { completeHumanPodcast } from "@/content/case-studies/complete-human-podcast";
import { realEstateMindset } from "@/content/case-studies/real-estate-mindset";

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
  // Archive-era clients (pre-repositioning) — full case study pages,
  // but category: "archive" and featured: false so they stay off the
  // flagship /work grid and homepage teasers.
  tmpPodcast,
  embraceYourReal,
  collaectionRadio,
  heartfeldtRadio,
  martinGarrixShow,
  oneWorldRadio,
  dialedHealth,
  brohug,
  tomorrowland,
  locTax,
  biohackingBeauty,
  theLivelyShow,
  fascatCoaching,
  heldeepRadio,
  completeHumanPodcast,
  realEstateMindset,
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
