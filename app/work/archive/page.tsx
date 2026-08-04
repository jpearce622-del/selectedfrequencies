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
    "Earlier production work from the first years of Selected Frequencies — mindset and health podcasts, plus EDM radio for Tomorrowland and Martin Garrix.",
  path: "/work/archive",
});

export default function WorkArchivePage() {
  return (
    <>
      <PageHeader
        eyebrow="Archive"
        title="Where it started."
        intro="From mindset and health podcasts to EDM radio shows — earlier production work from the studio's first years."
      />

      <Section className="border-t border-border">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {archiveItems.map((item, i) => {
            const tile = (
              <div className="group relative aspect-square overflow-hidden rounded-2xl bg-fog shadow-sm ring-1 ring-border">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.name} — podcast cover art`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  // No cover art supplied yet — a titled tile in brand navy
                  // reads as deliberate, where a broken image or an empty
                  // square would not.
                  <div className="flex h-full w-full items-center justify-center bg-deep p-4 text-center">
                    <span className="font-display text-sm font-semibold leading-snug tracking-tight text-background/90">
                      {item.name}
                    </span>
                  </div>
                )}
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
      {/* Context for the grid. 172 words of body copy previously — mostly
          image tiles, which read as thin however much work they represent. */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Why this work still matters
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
            <p>
              Before Selected Frequencies produced podcasts it produced music
              and radio — mix shows for artists including Martin Garrix, Felix
              Jaehn, Oliver Heldens and Sam Feldt, and long-running radio
              output for Tomorrowland. Those shows were weekly, and they were
              judged on sound quality by audiences who listen on serious
              systems. Nothing sharpens mixing and mastering discipline faster
              than a mix show that has to hold up on a festival rig and a pair
              of cheap earbuds in the same week.
            </p>
            <p>
              That background is the reason podcast episodes here get treated
              as audio productions rather than recordings to be tidied. The
              habits carry over directly: matching loudness across episodes so
              a listener never touches the volume, controlling dynamics so a
              quiet guest stays intelligible, and mastering to a consistent
              target so a show sounds the same in a car, on a phone speaker,
              and in headphones.
            </p>
            <p>
              Alongside the music work sit earlier podcast clients — health,
              mindset, coaching and cycling shows — many of which have full
              write-ups of their own. The current roster is on the{" "}
              <Link
                href="/work"
                className="font-medium text-accent hover:text-accent-bright"
              >
                main work page
              </Link>
              , and the{" "}
              <Link
                href="/about"
                className="font-medium text-accent hover:text-accent-bright"
              >
                about page
              </Link>{" "}
              covers how the studio moved from one to the other.
            </p>
          </div>
        </Reveal>
      </Section>

    </>
  );
}
