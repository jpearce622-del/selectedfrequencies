/**
 * Client testimonials. One source, reused wherever a quote appears, so the
 * wording can never drift between the case study, the homepage and a
 * service page.
 *
 * Rules: the quote is verbatim as supplied and is never edited for flow,
 * tense or emphasis. Attribution carries only what the client has actually
 * provided — no invented job title.
 */

export interface Testimonial {
  id: string;
  quote: string;
  /** Person's name, exactly as they gave it. */
  name: string;
  /** Company or show. */
  organisation: string;
  /** Job title, only if supplied. Rendered when present, omitted when not. */
  role?: string;
  /** Case study slug, for the "read the case study" link and the artwork. */
  caseStudySlug?: string;
  /** Path under /public — the show's own artwork works well as the avatar. */
  avatar?: string;
  avatarAlt?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "assemble-you",
    // Supplied by Adam Lacey, September 2026. Verbatim.
    quote:
      "We worked with James for a few years and he helped us with our public podcast production and parts of our podcast learning product. James became an extension of the team and a part of our weekly cadence and process. He turned around work quickly and to a good standard.",
    name: "Adam Lacey",
    organisation: "Assemble You",
    // TODO (JAMES): add Adam's job title here if you have it. Left out
    // rather than guessed.
    caseStudySlug: "assemble-you",
    avatar: "/images/clients/the-assembly.jpeg",
    avatarAlt: "The Assembly podcast cover art",
  },
];

export const getTestimonial = (id: string) =>
  testimonials.find((t) => t.id === id);
