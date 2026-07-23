import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = buildMetadata({
  title: "Archive",
  description: "Earlier production work, kept separate from current client work.",
  path: "/work/archive",
});

export default function WorkArchivePage() {
  return (
    <PageHeader
      eyebrow="Archive"
      title="Earlier production work."
      intro="[PLACEHOLDER — earlier EDM/radio production work goes here, kept separate from current flagship client work. Supply the list of projects to include, or leave this page unlinked from primary nav if you'd rather not surface it.]"
    />
  );
}
