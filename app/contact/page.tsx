import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Waveform } from "@/components/ui/Waveform";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch about producing your podcast.",
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
                Tell me about your show and what you need — I&apos;ll reply
                directly, usually within a day.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-10 h-10 w-40 opacity-70">
              <Waveform bars={20} barClassName="bg-accent" />
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
