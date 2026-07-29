import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FounderJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "About James Pearce | Podcast Producer",
  description:
    "Selected Frequencies is a UK podcast studio founded by James Pearce in 2019. Eight years in audio, from BBC Radio 1 mixes to thousands of podcast episodes.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <FounderJsonLd />
      <BreadcrumbJsonLd trail={[{ name: "About", path: "/about" }]} />
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <Container>
          <div className="grid gap-12 sm:grid-cols-[1fr_1.6fr] sm:items-center">
            <Reveal>
              <Image
                src="/images/about/headshot.jpg"
                alt="James Pearce, founder of Selected Frequencies"
                width={720}
                height={720}
                className="w-full max-w-xs rounded-2xl border border-border object-cover"
              />
            </Reveal>

            <div>
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  About
                </p>
              </Reveal>
              <Reveal
                as="h1"
                delay={80}
                className="font-display mt-4 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl"
              >
                The studio behind the shows.
              </Reveal>
              <Reveal delay={160} className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  Selected Frequencies is a full-service podcast production
                  company, founded in 2019 by me, James Pearce.
                </p>
                <p>
                  My route into audio began in London in 2017. I started as a
                  subcontractor for Noisehouse, producing mixes that played on
                  BBC Radio 1, and was commissioned by Universal Music to produce
                  music for their artists — much of it under the Selected
                  Frequencies name. Those early years taught me the thing I still
                  build everything around: production isn&apos;t about the gear or
                  the software, it&apos;s about protecting the listener&apos;s
                  attention from the first second to the last.
                </p>
                <p>
                  That work ran deep into electronic music — a weekly role on The
                  Martin Garrix Show handling streaming, a mix produced for NERVO,
                  and collaborations across labels and artists. As podcasting
                  grew, I grew with it, and Selected Frequencies became what it is
                  today. Since then I&apos;ve produced thousands of episodes for
                  shows around the world, heard by millions of listeners across
                  every major platform.
                </p>
                <p>
                  These days I work from Banbridge, about twenty-five minutes
                  outside Belfast, in Northern Ireland. That matters less than it
                  used to. Podcast production has been a remote craft for years —
                  the files arrive, the work happens, the episode ships — and
                  being here has turned out to suit the way my clients are spread
                  out. A UK morning overlaps neatly with the rest of Europe, and
                  by the time the US wakes up, work sent over the night before is
                  usually already done. The studio is wherever the show is.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Who I work with
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-muted">
            <p>
              I take on all kinds of shows — interview, solo, narrative,
              business, and everything in between. If you&apos;ve got a podcast
              and want it to sound its best, that&apos;s the job. Selected
              Frequencies is a full-service editing and production studio, and
              I&apos;m happy working across any topic or format.
            </p>
            <p>
              That said, some of my favourite work sits in Bitcoin and finance. I
              produce a number of crypto and investing shows, and it&apos;s a
              space I&apos;ve come to really enjoy — the ideas are genuinely
              interesting, the audiences are sharp, and the hosts care about
              getting it right. So while the door is open to any show, Bitcoin and
              finance is where I&apos;ve built the deepest track record.
            </p>
            <p>
              Whatever the subject, the offer is the same: hand over the edit, the
              show notes, the distribution — as much or as little as you need —
              and put your energy into the ideas instead of the timeline.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Credentials &amp; experience
          </h2>
          <ul className="mt-5 space-y-2.5 text-base text-muted">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Founded Selected Frequencies in 2019; working in professional audio
              since 2017
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Thousands of episodes produced, with millions of listens across
              platforms
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Award-winning podcast producer and audio engineer with 7+ years&apos;
              experience
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              BA (Hons) in Music Production and Sound Engineering from Point Blank
              Music, London
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Clients rely on the quality — meticulous edits, clear communication,
              and fast turnaround that bring them back show after show
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Full-service editing and production for any show, with deep
              experience in Bitcoin and finance
            </li>
          </ul>
        </Reveal>
      </Section>

      <Section className="border-t border-border text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s talk about your show
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-8 flex justify-center">
          <Button href="/contact">Get in touch</Button>
        </Reveal>
      </Section>
    </>
  );
}
