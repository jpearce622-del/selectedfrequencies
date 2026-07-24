import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ShowNotesFlow } from "@/components/tools/show-notes/ShowNotesFlow";
import { ExampleOutput } from "@/components/tools/show-notes/ExampleOutput";

export const metadata: Metadata = buildMetadata({
  title: "Free Podcast Show Notes Generator",
  description:
    "Upload a podcast episode and get a full transcript plus AI-drafted show notes in minutes. Free tool from Selected Frequencies — no account, no subscription.",
  path: "/tools/show-notes-generator",
});

export default function ShowNotesGeneratorPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 text-center sm:pt-32 sm:pb-20">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Free Tool
            </p>
          </Reveal>
          <Reveal
            as="h1"
            delay={70}
            className="font-display mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Podcast Show Notes Generator
          </Reveal>
          <Reveal delay={130} className="mx-auto mt-5 max-w-xl">
            <p className="text-lg leading-relaxed text-muted">
              Upload an episode, enter your email, and get back a full
              transcript plus draft show notes — in a few minutes, for free.
            </p>
          </Reveal>

          {/* Feature pills */}
          <Reveal delay={180} className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              "Audio & video files",
              "Up to 30 minutes",
              "Transcript included",
              "Copy or download",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
              >
                {label}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Upload flow */}
      <section className="bg-fog py-16 sm:py-20">
        <Container className="max-w-2xl">
          <ShowNotesFlow />
        </Container>
      </section>

      {/* Example output — ungated for SEO */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              What you&rsquo;ll get
            </h2>
            <p className="mt-2 max-w-xl text-base text-muted">
              A real transcript of your episode plus structured show notes
              ready to publish — generated from your audio, not a template.
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-8">
            <ExampleOutput />
          </Reveal>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-fog py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              How it works
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Upload your episode",
                body: "Drag and drop any audio or video file up to 30 minutes. MP3, MP4, WAV, M4A, and most other formats are supported.",
              },
              {
                step: "2",
                title: "Transcription runs",
                body: "Your episode is transcribed using Deepgram's Nova-2 model — one of the most accurate speech-to-text engines available.",
              },
              {
                step: "3",
                title: "Show notes are drafted",
                body: "Claude reads the transcript and generates structured show notes: summary, key topics, takeaways, and resources mentioned.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <span className="text-3xl font-semibold text-border">
                    {item.step}
                  </span>
                  <h3 className="font-display mt-3 text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Privacy notice */}
      <section className="py-12 sm:py-14">
        <Container className="max-w-2xl">
          <Reveal>
            <div className="rounded-2xl border border-border bg-fog p-6 text-sm leading-relaxed text-muted">
              <p className="font-medium text-foreground">Data & privacy</p>
              <p className="mt-2">
                Your uploaded audio is sent to Deepgram for transcription and
                then deleted — it is not stored by Selected Frequencies beyond
                the processing window. The generated transcript and show notes
                are stored against your email address solely to prevent
                re-submission abuse and to deliver your results. Your email
                will not be sold or shared with third parties.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Limitation disclaimer */}
      <section className="pb-20">
        <Container className="max-w-2xl">
          <Reveal>
            <div className="rounded-2xl bg-deep px-6 py-8 text-background">
              <p className="font-display text-lg font-semibold tracking-tight">
                This is a lite preview of the full service.
              </p>
              <p className="mt-2 text-sm leading-relaxed opacity-80">
                The free tool generates a single-pass draft — no editorial
                polish, no chapter timestamp file, no YouTube assets, and no
                ongoing support. The paid production service includes all of
                that, plus a dedicated producer who knows your show and
                refines output to your exact style.
              </p>
              <a
                href="/contact"
                className="mt-5 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Talk to us about full production →
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
