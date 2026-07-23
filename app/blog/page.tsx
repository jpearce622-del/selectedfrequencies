import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
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
    <Section className="pt-20 sm:pt-28">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Blog
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Notes on podcast production, for people who&apos;d rather focus on
        their show than their editing software.
      </p>

      {posts.length === 0 ? (
        <p className="mt-16 text-sm text-muted-foreground">
          No posts yet — check back soon.
        </p>
      ) : (
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-border bg-surface p-8 transition hover:border-accent"
            >
              <p className="text-sm text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {post.metaDescription}
              </p>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
