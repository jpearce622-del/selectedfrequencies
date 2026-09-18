import Image from "next/image";
import Link from "next/link";
import type { Testimonial } from "@/data/testimonials";

/**
 * A client quote as a speech bubble: a card with a small tail pointing down
 * to the person who said it.
 *
 * Deliberately restrained. The tail is the only thing that says "speech
 * bubble"; the rest is the site's ordinary card language (surface, border,
 * radius) so it reads as a quote from a person rather than a marketing
 * graphic. The avatar is the client's own show artwork, which is already in
 * the repo and is a stronger identity signal than a stock headshot.
 *
 * Distinct from the navy testimonial band on case study pages, which is
 * for the one big quote on a page about that client. This is for putting
 * the same quote somewhere it's evidence for a wider argument.
 */
export function TestimonialBubble({
  testimonial,
  className = "",
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const t = testimonial;
  const attribution = [t.name, t.role, t.organisation].filter(Boolean).join(", ");

  return (
    <figure className={`max-w-2xl ${className}`}>
      <blockquote className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8">
        {/* Opening quote mark, decorative. */}
        <span
          aria-hidden="true"
          className="font-display absolute -top-3 left-6 text-5xl leading-none text-accent"
        >
          &ldquo;
        </span>
        <p className="font-display text-lg leading-relaxed text-foreground sm:text-xl">
          {t.quote}
        </p>
        {/* The tail. Two triangles: the border colour behind, the surface
            colour in front and one pixel higher, which draws a bordered
            triangle without an SVG. */}
        <span
          aria-hidden="true"
          className="absolute -bottom-3 left-10 h-0 w-0 border-x-[12px] border-t-[12px] border-x-transparent border-t-border"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-[10px] left-10 h-0 w-0 border-x-[12px] border-t-[12px] border-x-transparent border-t-surface"
        />
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 pl-2">
        {t.avatar && (
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src={t.avatar}
              alt={t.avatarAlt ?? ""}
              fill
              sizes="44px"
              className="object-cover"
            />
          </span>
        )}
        <span className="text-sm">
          <span className="block font-medium text-foreground">{attribution}</span>
          {t.caseStudySlug && (
            <Link
              href={`/work/${t.caseStudySlug}`}
              className="text-accent hover:text-accent-bright"
            >
              Read the case study →
            </Link>
          )}
        </span>
      </figcaption>
    </figure>
  );
}
