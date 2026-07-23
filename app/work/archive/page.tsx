import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { archiveItems } from "@/content/archive";

export const metadata: Metadata = buildMetadata({
  title: "Archive",
  description:
    "Earlier production work — podcasts, radio, and EDM — from before Selected Frequencies focused on expert and thought-leadership shows.",
  path: "/work/archive",
});

export default function WorkArchivePage() {
  return (
    <>
      <PageHeader
        eyebrow="Archive"
        title="Where it started."
        intro="From mindset and health podcasts to EDM radio shows — earlier production work, before the focus narrowed to expert and thought-leadership podcasts."
      />

      <Section className="border-t border-border">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {archiveItems.map((item, i) => {
            const tile = (
              <div className="group relative aspect-square overflow-hidden rounded-2xl bg-fog shadow-sm ring-1 ring-border">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-4">
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    {item.slug && (
                      <p className="mt-0.5 text-xs font-medium text-white/70">
                        Read the case study →
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );

            return (
              <Reveal key={item.name} delay={(i % 8) * 50}>
                {item.slug ? (
                  <Link href={`/work/${item.slug}`}>{tile}</Link>
                ) : (
                  tile
                )}
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
