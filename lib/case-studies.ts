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
import { theEcMethod } from "@/content/case-studies/the-ec-method";
import { alignPodcast } from "@/content/case-studies/align-podcast";
import { inspirationsChanaMason } from "@/content/case-studies/inspirations-chana-mason";
import { possibilityInTheUniverse } from "@/content/case-studies/possibility-in-the-universe";
import { fintalkVermeg } from "@/content/case-studies/fintalk-vermeg";

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
  // featured: false until real cover art and an outcome figure exist — it
  // carries the fintech service page, but it isn't ready for the homepage
  // logo strip without artwork.
  fintalkVermeg,
  // Archive-era clients (pre-repositioning) — full case study pages,
  // but category: "archive" and featured: false so they stay off the
  // flagship /work grid and homepage teasers.
  tmpPodcast,
  alignPodcast,
  inspirationsChanaMason,
  possibilityInTheUniverse,
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
  theEcMethod,
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

/**
 * Other case studies to link to from a case study page.
 *
 * Every case study previously had exactly one internal link pointing at it —
 * the /work grid — which left each page a dead end and pooled all the
 * site's authority on the index. Linking each study to a few others spreads
 * that around and gives crawlers more than one route in.
 *
 * Ordering is deterministic (same category first, then the rest, both in
 * declaration order) so the markup is stable between builds rather than
 * reshuffling on every deploy. Studies are only described as "more work",
 * never as topically related — there's no genre/topic field on CaseStudy to
 * support a relatedness claim.
 */
export function getRelatedCaseStudies(slug: string, limit = 3): CaseStudy[] {
  const current = getCaseStudyBySlug(slug);
  const others = allCaseStudies.filter((study) => study.slug !== slug);
  if (!current) return others.slice(0, limit);

  // Walk a ring of same-category studies starting from this one's position.
  //
  // Both earlier attempts (slice-from-top, then offset-by-hash/index) left
  // some studies with a single inbound link, because each study builds its
  // own differently-ordered pool — so an offset into it guarantees nothing
  // about global coverage. A ring over a *fixed* list does: study i links to
  // i+1, i+2, i+3, so every study is linked exactly `limit` times, by
  // construction rather than by luck. Deterministic, so markup stays stable
  // between builds.
  const ring = allCaseStudies.filter((s) => s.category === current.category);
  const here = ring.findIndex((s) => s.slug === slug);

  const picked: CaseStudy[] = [];
  for (let step = 1; step < ring.length && picked.length < limit; step++) {
    picked.push(ring[(here + step) % ring.length]);
  }

  // Small category (fewer members than `limit` + itself) — top up from the
  // rest so the section is never short.
  if (picked.length < limit) {
    for (const s of others) {
      if (picked.length >= limit) break;
      if (!picked.some((p) => p.slug === s.slug)) picked.push(s);
    }
  }
  return picked;
}


/**
 * Search-result description for a case study, capped at 160 characters so it
 * doesn't truncate in Google. Uses the hand-written `metaDescription` when a
 * study has one; otherwise composes a factual one from fields we already
 * hold — never inflating or inventing numbers.
 */
export function caseStudyMetaDescription(study: CaseStudy): string {
  if (study.metaDescription) return study.metaDescription.slice(0, 160);

  const lead = `${study.showName} — produced by Selected Frequencies.`;
  const service = study.services[0]
    ? ` ${study.services[0]} for ${study.clientName}.`
    : "";

  // Prefer a real, already-verified outcome clause when it fits.
  const credibility = study.outcome
    ? ` ${study.outcome.split("—")[0].trim()}`
    : study.hostName
      ? ` Hosted by ${study.hostName}.`
      : "";

  const composed = `${lead}${service}${credibility}`.replace(/\s+/g, " ").trim();
  if (composed.length <= 160) return composed;

  // Trim on a word boundary rather than mid-word.
  return `${composed.slice(0, 157).replace(/[\s,.;:—-]+\S*$/, "")}…`;
}
