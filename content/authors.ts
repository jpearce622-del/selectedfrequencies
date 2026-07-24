import type { Author } from "@/types/blog";

// Blog author records. The avatar is a real headshot under /public.
export const shaunaMartin: Author = {
  name: "Shauna Martin",
  role: "Head of Content Marketing",
  bio: "Hi, I'm Shauna — I lead content at Selected Frequencies. I spend my days pulling apart what makes a podcast worth listening to and writing it down, so you don't have to learn it all the hard way.",
  // TODO: replace the placeholder with Shauna's real headshot. Drop the
  // photo in at /public/images/authors/shauna-martin.jpg and update this
  // path to match.
  avatar: "/images/authors/shauna-martin.svg",
  avatarAlt: "Shauna Martin, Head of Content Marketing at Selected Frequencies",
};
