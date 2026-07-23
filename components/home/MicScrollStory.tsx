"use client";

import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 68;
const frameSrc = (i: number) =>
  `/images/mic-360/frame-${String(i).padStart(3, "0")}.jpg`;

const chapters = [
  {
    eyebrow: "01 — Experience",
    text: "Eight years producing podcasts, start to finish.",
  },
  {
    eyebrow: "02 — Service",
    text: "Editing, show notes, chapter timestamps, YouTube and social assets — one producer, every step.",
  },
  {
    eyebrow: "03 — Focus",
    text: "Built for founders, coaches, and finance voices building real authority.",
  },
  {
    eyebrow: "04 — Next",
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

    // Cover-fit the frame into the canvas.
    const canvasRatio = cssWidth / cssHeight;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    let drawW: number, drawH: number, offsetX: number, offsetY: number;
    if (imgRatio > canvasRatio) {
      drawH = cssHeight;
      drawW = drawH * imgRatio;
      offsetX = (cssWidth - drawW) / 2;
      offsetY = 0;
    } else {
      drawW = cssWidth;
      drawH = drawW / imgRatio;
      offsetX = 0;
      offsetY = (cssHeight - drawH) / 2;
    }

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
        if (frame !== frameRef.current) {
          frameRef.current = frame;
          draw(frame);
        }

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
      <section className="bg-deep py-24 text-background sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <NextImage
            src={frameSrc(20)}
            alt="Podcast microphone in a recording studio"
            width={960}
            height={540}
            className="mx-auto mb-14 w-full max-w-xl rounded-3xl"
          />
          <div className="space-y-10">
            {chapters.map((c) => (
              <div key={c.text}>
                <p className="text-xs font-medium tracking-[0.14em] text-amber uppercase">
                  {c.eyebrow}
                </p>
                <p className="font-display mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
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
    <section ref={sectionRef} className="relative bg-deep" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,19,15,0.85) 0%, rgba(20,19,15,0.15) 45%, rgba(20,19,15,0.55) 100%)",
          }}
        />

        {loadedCount < FRAME_COUNT && (
          <div className="absolute top-6 right-6 rounded-full bg-black/30 px-3 py-1 text-xs text-background/70">
            Loading {Math.round((loadedCount / FRAME_COUNT) * 100)}%
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 px-6 pb-20 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-2xl text-center">
            {chapters.map((c, i) => (
              <div
                key={c.text}
                className="transition-opacity duration-500"
                style={{
                  opacity: activeChapter === i ? 1 : 0,
                  position: i === 0 ? "static" : "absolute",
                  inset: i === 0 ? undefined : 0,
                  pointerEvents: activeChapter === i ? "auto" : "none",
                }}
              >
                <p className="text-xs font-medium tracking-[0.14em] text-amber uppercase">
                  {c.eyebrow}
                </p>
                <p className="font-display mt-3 text-2xl font-semibold tracking-tight text-balance text-background sm:text-4xl">
                  {c.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {chapters.map((_, i) => (
              <span
                key={i}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: activeChapter === i ? 24 : 8,
                  backgroundColor:
                    activeChapter === i
                      ? "var(--accent-bright)"
                      : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
