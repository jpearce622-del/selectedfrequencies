import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/types/case-study";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.slug}`} className="group block">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-surface">
        {study.logo ? (
          <Image
            src={study.logo}
            alt={study.logoAlt ?? study.showName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 300px"
          />
        ) : (
          <div className="h-full w-full bg-border" />
        )}
      </div>
      <div className="mt-4 px-0.5">
        <h3 className="font-display text-base font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-lg">
          {study.showName}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">
          {study.oneLiner}
        </p>
      </div>
    </Link>
  );
}
