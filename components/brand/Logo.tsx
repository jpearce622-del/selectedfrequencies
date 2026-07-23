import { SoundMark } from "./SoundMark";
import { Wordmark } from "./Wordmark";

/** Horizontal lockup: icon + wordmark. Used in the header and footer. */
export function Logo({
  variant = "dark",
  size = "sm",
  className = "",
}: {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const iconColor = variant === "dark" ? "text-deep" : "text-background";
  const iconHeight = size === "lg" ? "h-10" : size === "md" ? "h-7" : "h-5";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <SoundMark className={`${iconHeight} w-auto ${iconColor}`} />
      <Wordmark size={size} variant={variant} />
    </span>
  );
}
