"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/podcast-launch-roadmap", label: "Start a Podcast" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      // Always blurred/solid, not transparent-at-top: the homepage now
      // opens on the dark mic scroll-story, so a transparent header would
      // be unreadable until the visitor scrolled past it.
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label="Selected Frequencies — home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-sm font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-accent-foreground"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
