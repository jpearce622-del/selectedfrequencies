import type { Author } from "@/types/blog";

// Blog author records. The avatar is a real headshot under /public.
export const shaunaMartin: Author = {
  name: "Shauna Martin",
  role: "Head of Content Marketing",
  bio: "Hi, I'm Shauna — I lead content at Selected Frequencies. I spend my days pulling apart what makes a podcast worth listening to and writing it down, so you don't have to learn it all the hard way.",
  avatar: "/images/authors/shauna-martin.jpg",
  avatarAlt: "Shauna Martin, Head of Content Marketing at Selected Frequencies",
};

// James is the producer, so posts written from inside the production process
// carry his byline rather than the content team's — the authority in those
// pieces comes from having done the work.
export const jamesPearce: Author = {
  name: "James Pearce",
  role: "Founder & Podcast Producer",
  bio: "I'm James — I founded Selected Frequencies and produce the shows we work on. Eight years in audio, from BBC Radio 1 mixes to thousands of podcast episodes, and I still edit every show myself.",
  avatar: "/images/about/headshot.jpg",
  avatarAlt: "James Pearce, founder and podcast producer at Selected Frequencies",
};
