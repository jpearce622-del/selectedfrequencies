import Link from "next/link";
import type { CaseStudy } from "@/types/case-study";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.08] hover:ring-transparent"
    >
      <p className="text-sm font-medium text-muted-foreground">
        {study.clientName}
      </p>
      <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        {study.showName}
      </h3>
      <p className="mt-4 flex-1 text-base leading-6 text-muted">
        {study.oneLiner}
      </p>
      <span className="mt-8 inline-flex items-center gap-1.5 text-base font-medium text-accent">
        Read the case study
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
