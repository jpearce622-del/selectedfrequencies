import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Waveform } from "@/components/ui/Waveform";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Notes on podcast production, editing, and building authority through audio.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Notes"
        title="On production, editing & building authority through audio."
        intro="Notes on podcast production, for people who'd rather focus on their show than their editing software."
      />

      <Section className="border-t border-border">
        {posts.length === 0 ? (
          <Reveal>
            <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface/50 py-20 text-center">
              <div className="mb-6 h-8 w-24 opacity-40">
                <Waveform bars={16} barClassName="bg-accent" />
              </div>
              <p className="font-display text-xl font-medium">
                Nothing published yet.
              </p>
              <p className="mt-2 max-w-sm text-sm text-muted">
                The first pieces are on the way — check back soon, or get in
                touch in the meantime.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.06]"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="font-display mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                    {post.metaDescription}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
