import type { CaseStudy } from "@/types/case-study";
import { geneticsPodcast } from "@/content/case-studies/genetics-podcast";

// Add one import + array entry per client as their case study copy is supplied.
const allCaseStudies: CaseStudy[] = [geneticsPodcast];

export function getAllCaseStudies(): CaseStudy[] {
  return allCaseStudies;
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return allCaseStudies.filter((study) => study.featured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return allCaseStudies.find((study) => study.slug === slug);
}
