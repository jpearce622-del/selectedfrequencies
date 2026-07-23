import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { BlogImage } from "@/types/blog";

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

  const meta = buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });

  // Add the article's cover image + article OG type on top of the shared meta.
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      images: [{ url: post.coverImage.src, alt: post.coverImage.alt }],
    },
    twitter: {
      ...meta.twitter,
      images: [post.coverImage.src],
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Markdown link renderer: external links open in a new tab safely.
const markdownComponents = {
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
    const external = !!href && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
};

function Figure({ image }: { image: BlogImage }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-border bg-fog">
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={640}
        className="h-auto w-full"
      />
      {(image.caption || image.credit) && (
        <figcaption className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
          {image.caption}
          {image.caption && image.credit ? " · " : ""}
          {image.credit && <span className="italic">{image.credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${post.slug}`;

  // BlogPosting structured data — crawlable, server-rendered.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${siteConfig.url}${post.coverImage.src}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Organization", name: post.author, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 2, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ---------- Header ---------- */}
      <section className="pt-16 pb-8 sm:pt-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <nav className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-accent">{post.category}</span>
              </nav>
            </Reveal>
            <Reveal
              as="h1"
              delay={70}
              className="font-display mt-4 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl"
            >
              {post.title}
            </Reveal>
            <Reveal
              delay={140}
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted"
            >
              <span className="font-medium text-foreground">{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Hero image ---------- */}
      <Container>
        <Reveal className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              width={1600}
              height={840}
              priority
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </Container>

      {/* ---------- Body: TOC + article ---------- */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[230px_minmax(0,1fr)]">
            {/* Table of contents */}
            <aside className="lg:sticky lg:top-24 lg:h-max">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                In this article
              </p>
              <nav aria-label="Table of contents" className="mt-4">
                <ol className="space-y-2.5 border-l border-border">
                  {post.sections.map((section, i) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="-ml-px flex gap-2.5 border-l-2 border-transparent pl-4 text-sm leading-snug text-muted transition-colors hover:border-accent hover:text-foreground"
                      >
                        <span className="font-mono text-xs text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Article */}
            <article className="min-w-0">
              {/* Lede */}
              <div className="prose prose-neutral max-w-none text-lg prose-p:leading-8 prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
                <ReactMarkdown components={markdownComponents}>
                  {post.intro}
                </ReactMarkdown>
              </div>

              {/* Key takeaways */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="mt-10 rounded-2xl border border-border bg-fog p-6 sm:p-8">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-accent">
                    Key takeaways
                  </p>
                  <ul className="mt-4 space-y-3">
                    {post.keyTakeaways.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-foreground/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sections */}
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28 pt-12">
                  <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {section.heading}
                  </h2>
                  {section.image && <Figure image={section.image} />}
                  <div className="prose prose-neutral mt-5 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-h3:text-xl prose-h3:mt-8 prose-p:leading-8 prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-accent prose-blockquote:text-foreground/80">
                    <ReactMarkdown components={markdownComponents}>
                      {section.body}
                    </ReactMarkdown>
                  </div>
                </section>
              ))}

              {/* References */}
              {post.references && post.references.length > 0 && (
                <div className="mt-14 border-t border-border pt-8">
                  <h2 className="font-display text-lg font-semibold tracking-tight">
                    References &amp; further reading
                  </h2>
                  <ol className="mt-4 space-y-2 text-sm text-muted">
                    {post.references.map((ref, i) => (
                      <li key={ref.url} className="flex gap-3">
                        <span className="font-mono text-xs text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          {ref.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </article>
          </div>
        </Container>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-deep text-background">
        <Container className="py-20 text-center sm:py-24">
          <Reveal
            as="h2"
            className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Rather focus on the ideas than the edit?
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-4 max-w-xl">
            <p className="text-base leading-relaxed text-background/70">
              We produce expert and thought-leadership podcasts end to end —
              editing, show notes, and distribution handled.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-8 flex justify-center">
            <Button href="/contact" variant="onDark">
              Start a conversation
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
