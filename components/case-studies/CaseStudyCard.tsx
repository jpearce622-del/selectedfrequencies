import Link from "next/link";
import type { CaseStudy } from "@/types/case-study";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block rounded-2xl border border-border bg-surface p-8 transition hover:border-accent"
    >
      <p className="text-sm font-medium text-muted">{study.clientName}</p>
      <h3 className="mt-1 text-xl font-semibold tracking-tight group-hover:text-accent">
        {study.showName}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{study.oneLiner}</p>
      <span className="mt-6 inline-block text-sm font-medium text-accent">
        Read the case study →
      </span>
    </Link>
  );
}
