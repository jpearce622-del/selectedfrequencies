import Link from "next/link";
import { type ReactNode } from "react";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary: "border border-border text-foreground hover:bg-surface",
};

export function Button({
  href,
  children,
  variant = "primary",
  type,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  type?: "button" | "submit";
  className?: string;
}) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
