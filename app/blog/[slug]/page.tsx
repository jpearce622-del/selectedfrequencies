import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <Section className="pt-20 sm:pt-28">
      <article className="mx-auto max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {new Date(post.publishedAt).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.category}
        </p>
        <h1 className="font-display mt-4 text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl">
          {post.title}
        </h1>
        <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-accent">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </article>
    </Section>
  );
}
