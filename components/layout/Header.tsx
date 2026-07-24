"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/podcast-launch-roadmap", label: "Start a Podcast" },
];

const toolsItems = [
  {
    href: "/tools/show-notes-generator",
    label: "Show Notes Generator",
    badge: "Free",
    description: "Transcript + draft show notes from any episode",
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close tools dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
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

          {/* Tools dropdown */}
          <div ref={toolsRef} className="relative">
            <button
              type="button"
              onClick={() => setToolsOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                pathname.startsWith("/tools")
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
              aria-expanded={toolsOpen}
            >
              Tools
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`transition-transform ${toolsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {toolsOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-border bg-surface shadow-xl shadow-black/[0.08]">
                {toolsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setToolsOpen(false)}
                    className="flex flex-col gap-0.5 px-4 py-3.5 transition-colors hover:bg-fog"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                      {item.label}
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                        {item.badge}
                      </span>
                    </span>
                    <span className="text-xs text-muted">{item.description}</span>
                  </Link>
                ))}
                <div className="border-t border-border px-4 py-3">
                  <Link
                    href="/tools"
                    onClick={() => setToolsOpen(false)}
                    className="text-xs font-medium text-accent"
                  >
                    All tools →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
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
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-sm font-medium text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Tools section in mobile */}
            <div className="px-2 pt-2 pb-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Tools
              </p>
            </div>
            {toolsItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-md px-2 py-3 text-sm font-medium text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                  {item.badge}
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-accent-foreground"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
