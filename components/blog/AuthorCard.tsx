import Image from "next/image";
import type { Author } from "@/types/blog";

/**
 * Full "about the author" card — headshot in a bordered circle, name,
 * role, and a short bio. Rendered at the foot of each article.
 */
export function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="rounded-2xl border border-border bg-fog p-6 sm:p-7">
      <div className="flex items-center gap-4">
        <AuthorAvatar author={author} size={64} />
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Author
          </p>
          <p className="font-display text-lg font-semibold tracking-tight">
            {author.name}
          </p>
          <p className="text-sm text-muted">{author.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{author.bio}</p>
    </div>
  );
}

/**
 * Circular, bordered headshot. Reused by the top byline and the card.
 */
export function AuthorAvatar({
  author,
  size = 32,
}: {
  author: Author;
  size?: number;
}) {
  return (
    <span
      className="inline-block shrink-0 overflow-hidden rounded-full border-2 border-white bg-surface shadow-sm ring-1 ring-border"
      style={{ width: size, height: size }}
    >
      <Image
        src={author.avatar}
        alt={author.avatarAlt}
        width={size}
        height={size}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
