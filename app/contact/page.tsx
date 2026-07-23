import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch about producing your podcast.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section className="pt-20 sm:pt-28">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Get in touch
        </h1>
        <p className="mt-6 text-lg text-muted">
          Tell me about your show and what you need — I&apos;ll reply
          directly.
        </p>

        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
