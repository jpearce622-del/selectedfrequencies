/**
 * "selected / frequencies" text lockup, recreated from the brand logo:
 * "selected" large and orange, "frequencies" smaller, navy (or white on
 * dark), right-aligned underneath. Real text (not an image or SVG path)
 * so it stays crisp, accessible, and readable to search engines.
 */
const SIZES = {
  sm: { top: "text-lg", bottom: "text-[0.6rem]" },
  md: { top: "text-2xl", bottom: "text-xs" },
  lg: { top: "text-5xl sm:text-6xl", bottom: "text-lg sm:text-xl" },
} as const;

export function Wordmark({
  size = "sm",
  variant = "dark",
  className = "",
}: {
  size?: keyof typeof SIZES;
  variant?: "dark" | "light";
  className?: string;
}) {
  const { top, bottom } = SIZES[size];
  const bottomColor = variant === "dark" ? "text-deep" : "text-background";

  return (
    <span className={`inline-flex flex-col items-end leading-none ${className}`}>
      <span className={`${top} font-medium tracking-tight text-accent`}>
        selected
      </span>
      <span className={`${bottom} font-normal tracking-wide ${bottomColor} -mt-0.5`}>
        frequencies
      </span>
    </span>
  );
}
