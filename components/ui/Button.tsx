import Link from "next/link";
import { type ReactNode } from "react";

const baseStyles =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5";

const variants = {
  primary:
    "bg-accent text-accent-foreground shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:bg-accent-bright hover:shadow-lg hover:shadow-accent/20",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-foreground/30 hover:bg-surface",
  onDark:
    "bg-background text-foreground hover:bg-white hover:shadow-lg hover:shadow-black/20",
};

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-0.5"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  type,
  className = "",
  withArrow = true,
}: {
  href?: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  type?: "button" | "submit";
  className?: string;
  withArrow?: boolean;
}) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && <Arrow />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {content}
    </button>
  );
}
