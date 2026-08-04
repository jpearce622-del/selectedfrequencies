import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SoundMark } from "@/components/brand/SoundMark";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Get a Podcast Editing Quote",
  description:
    "Tell us about your show and get a straightforward quote for editing, show notes, or full production. Usually a reply within a day. We accept Bitcoin too.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left: pitch */}
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Contact
              </p>
            </Reveal>
            <Reveal
              as="h1"
              delay={80}
              className="font-display mt-4 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl"
            >
              Let&apos;s make your show sound the part.
            </Reveal>
            <Reveal delay={160} className="mt-6 max-w-md">
              <p className="text-lg leading-relaxed text-muted">
                Tell us about your show and what you need — we&apos;ll reply
                within one working day. Just a name and an email is enough to
                start; the rest is optional.
              </p>
            </Reveal>
            {/* Genuinely useful logistics for US clients, and a relevance
                signal at the same time: the time difference is the reason
                episodes come back overnight rather than a drawback. */}
            <Reveal delay={190} className="mt-4 max-w-md">
              <p className="text-base leading-relaxed text-muted">
                We work from Northern Ireland (GMT/BST) with clients across the
                UK, the US and Europe. For US shows that time difference works
                in your favour — send an episode at the end of your day and it
                is usually being worked on before you are back at your desk.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <SoundMark className="mt-10 h-8 w-32 text-accent" />
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-8 text-sm text-muted">
                We accept Bitcoin —{" "}
                <Link
                  href="/bitcoin"
                  className="font-medium text-accent hover:text-accent-bright"
                >
                  see how
                </Link>
                .
              </p>
            </Reveal>
            {/* What actually happens after the form is sent. The page was
                121 words of body copy — thin to a crawler, and thin to a
                visitor deciding whether it's worth filling in. */}
            <Reveal delay={320} className="mt-10 border-t border-border pt-8">
              <h2 className="font-display text-lg font-semibold tracking-tight">
                What happens next
              </h2>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-muted">
                <li>
                  <span className="font-medium text-foreground">
                    You get a reply within one working day.
                  </span>{" "}
                  From James, not an account manager or an auto-responder.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    We work out what your show actually needs.
                  </span>{" "}
                  Usually a few questions over email — how long episodes run,
                  how you record, whether you need video, and how much of the
                  process you want to hand over. No call required unless you
                  want one.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    You get a fixed price per episode.
                  </span>{" "}
                  Based on the{" "}
                  <Link
                    href="/services"
                    className="font-medium text-accent hover:text-accent-bright"
                  >
                    published rates
                  </Link>
                  , not a figure invented for you. If your show doesn&apos;t fit
                  a tier, we&apos;ll say so and quote the work honestly.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    We start with one episode.
                  </span>{" "}
                  You hear the difference on your own show before committing to
                  anything ongoing. No contracts, no minimum term.
                </li>
              </ol>
              <p className="mt-5 text-sm leading-6 text-muted">
                Not ready for a quote? The{" "}
                <Link
                  href="/podcast-editing-cost-calculator"
                  className="font-medium text-accent hover:text-accent-bright"
                >
                  editing cost calculator
                </Link>{" "}
                works out what producing your show yourself costs in time, and
                the{" "}
                <Link
                  href="/work"
                  className="font-medium text-accent hover:text-accent-bright"
                >
                  case studies
                </Link>{" "}
                cover how the shows we produce are actually made.
              </p>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
