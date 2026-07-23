import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SoundMark } from "@/components/brand/SoundMark";
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
              <SoundMark className="mb-6 h-8 w-24 text-accent opacity-40" />
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
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.06]"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-fog">
                    <Image
                      src={post.coverImage.src}
                      alt={post.coverImage.alt}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      <span className="text-accent">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="font-display mt-2.5 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-accent">
                      {post.title}
                    </h2>
                    <p className="mt-2.5 flex-1 text-sm leading-6 text-muted">
                      {post.metaDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Read article
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
