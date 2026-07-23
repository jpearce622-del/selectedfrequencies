import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Archive",
  description: "Earlier production work, kept separate from current client work.",
  path: "/work/archive",
});

export default function WorkArchivePage() {
  return (
    <Section className="pt-20 sm:pt-28">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Archive
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        [PLACEHOLDER — earlier EDM/radio production work goes here, kept
        separate from current flagship client work. Supply the list of
        projects to include, or leave this page unlinked from primary nav if
        you&apos;d rather not surface it.]
      </p>
    </Section>
  );
}
