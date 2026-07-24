"use client";

import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 68;
const frameSrc = (i: number) =>
  `/images/mic-360/frame-${String(i).padStart(3, "0")}.jpg`;

// Every line here already appears elsewhere on the site (stats, "what we
// do" steps, positioning copy, closing CTA) — just told one beat at a
// time as the mic turns. Nothing new is claimed.
const chapters = [
  {
    eyebrow: "01 — Experience",
    text: "Eight years producing podcasts, start to finish.",
  },
  {
    eyebrow: "02 — Plan",
    text: "Format, structure, and episode arcs mapped out before a single mic is switched on.",
  },
  {
    eyebrow: "03 — Edit",
    text: "Full episode edit — pacing, sound, and story — so every episode sounds intentional.",
  },
  {
    eyebrow: "04 — Distribute",
    text: "Show notes, chapter timestamps, and transcription review, ready for every platform.",
  },
  {
    eyebrow: "05 — Focus",
    text: "Any show, any topic — with deep experience in Bitcoin and finance.",
  },
  {
    eyebrow: "06 — Next",
    text: "Ready to sound like the expert you already are?",
  },
];

/**
 * Apple-style scroll-scrubbed product shot: a tall pinned section where
 * scroll position drives which frame of a pre-rendered 360 sequence is
 * drawn to canvas, with short text "chapters" cross-fading in as you pass
 * through it. Falls back to a single static frame + stacked text (no
 * scroll-jacking) under prefers-reduced-motion.
 */
export function MicScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [loadedCount, setLoadedCount] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect reduced-motion preference once on mount (avoids SSR mismatch;
  // deferred via rAF so the initial read isn't a synchronous setState
  // inside the effect body).
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const id = requestAnimationFrame(() => setReducedMotion(mq.matches));
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => {
      cancelAnimationFrame(id);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  const draw = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssWidth = canvas.clientWidth;
    const cssHeight = canvas.clientHeight;
    if (canvas.width !== cssWidth * dpr || canvas.height !== cssHeight * dpr) {
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
    }

    // Always fit to canvas height, centered horizontally. The sign of
    // offsetX does the rest of the work on its own: on a normal or
    // narrow (mobile) viewport the frame overflows the width slightly
    // and crops at the sides (cover-like); on an ultra-wide viewport it
    // falls short of the width instead, leaving navy letterbox padding
    // left/right rather than stretching or over-cropping the mic.
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const drawH = cssHeight;
    const drawW = drawH * imgRatio;
    const offsetX = (cssWidth - drawW) / 2;
    const offsetY = 0;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  };

  // Preload frames; draw frame 0 the moment it lands, as a poster.
  useEffect(() => {
    if (reducedMotion) return;
    let cancelled = false;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      img.onload = () => {
        if (cancelled) return;
        setLoadedCount((c) => c + 1);
        if (i === 0) draw(0);
      };
      images.push(img);
    }
    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, [reducedMotion]);

  // Scroll-driven frame + chapter selection.
  useEffect(() => {
    if (reducedMotion) return;

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        const progress = scrollable > 0 ? -rect.top / scrollable : 0;
        const clamped = Math.min(1, Math.max(0, progress));

        const frame = Math.min(
          FRAME_COUNT - 1,
          Math.round(clamped * (FRAME_COUNT - 1))
        );
        // Always redraw, not just when the frame index changes — a pure
        // resize (viewport width change) can leave the frame index
        // identical while the canvas still needs its pixel dimensions
        // and cover-fit math recalculated. draw() is cheap and already
        // rAF-throttled, so there's no real cost to dropping the guard.
        frameRef.current = frame;
        draw(frame);

        const chapter = Math.min(
          chapters.length - 1,
          Math.floor(clamped * chapters.length)
        );
        setActiveChapter(chapter);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    // Deliberately excludes `loadedCount`: this effect only needs to run
    // once per mount (reducedMotion flip aside) — `draw()` always reads
    // the latest `imagesRef.current`, so re-subscribing on every one of
    // the 68 incremental loads would just churn listeners for no benefit.
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <section className="bg-black py-24 text-background sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <NextImage
            src={frameSrc(20)}
            alt="Podcast microphone in a recording studio"
            width={960}
            height={540}
            className="mx-auto mb-14 w-full max-w-xl rounded-3xl"
          />
          <div className="mx-auto flex max-w-md flex-col gap-4 text-left">
            {chapters.map((c) => (
              <div
                key={c.text}
                className="rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-4 backdrop-blur-md"
              >
                <p className="text-[11px] font-semibold tracking-[0.16em] text-amber uppercase">
                  {c.eyebrow}
                </p>
                <p className="font-display mt-1.5 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative bg-black" style={{ height: "480vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas only ever draws the photo itself (clearRect, never a
            solid fill) — any space beside it when the viewport is wider
            than the 16:9 source is left transparent, so the section's
            own bg-black shows through directly underneath. The fade
            overlay below targets that same plain black, so the vignette
            and the background it blends into are guaranteed to be
            pixel-identical rather than two separately-authored "black"s
            that happen to drift apart. */}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.55) 100%), linear-gradient(to right, #000 0%, rgba(0,0,0,0.55) 20%, transparent 42%, transparent 58%, rgba(0,0,0,0.55) 80%, #000 100%)",
          }}
        />

        {loadedCount < FRAME_COUNT && (
          <div className="absolute top-6 right-6 rounded-full bg-black/30 px-3 py-1 text-xs text-background/70">
            Loading {Math.round((loadedCount / FRAME_COUNT) * 100)}%
          </div>
        )}

        {/* Chapters accumulate as they're reached: each block pops in, in
            order, and stays. The stack is anchored to the bottom and grows
            upward — newest block enters at the bottom, pushing earlier ones
            up — so the sequence reads 01, then 01+02, then 01+02+03… */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-16 sm:px-10 sm:pb-20">
          <div className="mx-auto flex max-w-md flex-col sm:mx-0">
            {chapters.map((c, i) => {
              const revealed = i <= activeChapter;
              return (
                <div
                  key={c.text}
                  style={{
                    display: "grid",
                    gridTemplateRows: revealed ? "1fr" : "0fr",
                    opacity: revealed ? 1 : 0,
                    transition:
                      "grid-template-rows 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.45s ease",
                  }}
                >
                  <div style={{ overflow: "hidden", minHeight: 0 }}>
                    <div
                      className="mt-3 rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-4 shadow-xl shadow-black/40 backdrop-blur-md"
                      style={{
                        transform: revealed
                          ? "translateY(0) scale(1)"
                          : "translateY(10px) scale(0.98)",
                        transition:
                          "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      <p className="text-[11px] font-semibold tracking-[0.16em] text-amber uppercase">
                        {c.eyebrow}
                      </p>
                      <p className="font-display mt-1.5 text-lg font-semibold leading-snug tracking-tight text-background sm:text-xl">
                        {c.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
