import Link from "next/link";
import type { CaseStudy } from "@/types/case-study";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.06]"
    >
      {/* Accent wash that fades in on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <p className="relative text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {study.clientName}
      </p>
      <h3 className="font-display relative mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        {study.showName}
      </h3>
      <p className="relative mt-4 flex-1 text-sm leading-6 text-muted">
        {study.oneLiner}
      </p>
      <span className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Read the case study
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
