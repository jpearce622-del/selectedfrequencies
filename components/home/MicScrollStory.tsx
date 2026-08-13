"use client";

import NextImage from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const FRAME_COUNT = 202;
// WebP, not JPEG: the same 202 frames at q=82 come to ~3.6MB instead of
// ~7.3MB, with a max per-channel delta around 20/255 confined to edges —
// invisible on a moving product shot. Frame count is deliberately unchanged;
// smoothness comes from having 202 of them.
const frameSrc = (i: number) =>
  `/images/mic-360/frame-${String(i).padStart(3, "0")}.webp`;

// Load in two passes. Firing 202 requests at once is what made the homepage
// look pathological to auditing tools, and it delays the first usable frame
// because the one you actually need is queued behind 200 you don't. So:
// every 4th frame first (51 requests) — enough to scrub the whole rotation —
// then the remaining 151 fill in and sharpen it.
const COARSE_STRIDE = 4;

// Every line here already appears elsewhere on the site (stats, "what we
// do" steps, positioning copy, closing CTA) — just told one beat at a
// time as the mic turns. Nothing new is claimed.
const chapters: {
  eyebrow: string;
  text: string;
  cta?: { label: string; href: string };
}[] = [
  {
    eyebrow: "01 — Experience",
    text: "Eight years, thousands of episodes, millions of listens.",
  },
  {
    eyebrow: "02 — Everything handled",
    text: "Editing, show notes, chapters, and clips — the whole production, one point of contact.",
  },
  {
    eyebrow: "03 — Sound",
    text: "Full episode edits — pacing, sound, and story — so every show sounds intentional.",
  },
  {
    eyebrow: "04 — Speciality",
    text: "A rare edge in Bitcoin and finance shows — we'll even take payment in Bitcoin.",
  },
  {
    eyebrow: "05 — Next",
    text: "Ready to sound like the expert you already are?",
    cta: { label: "Start a conversation", href: "/contact" },
  },
];

/**
 * Apple-style scroll-scrubbed product shot: a tall pinned section where
 * scroll position drives which frame of a pre-rendered 360 sequence is
 * drawn to canvas, with short text "chapters" cross-fading in as you pass
 * through it. Falls back to a single static frame + stacked text (no
 * scroll-jacking) under prefers-reduced-motion.
 */
export function MicScrollStory({ hero }: { hero?: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fxCanvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Fractional frame positions. `target` is where the scroll says we should
  // be; `current` eases toward it so a fast flick animates through the
  // intervening frames instead of teleporting.
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const runningRef = useRef(false);

  const [loadedCount, setLoadedCount] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  // Hero starts fully visible (1) and fades as the chapter sequence begins.
  // Never used to *reveal* the hero — it's readable from first paint.
  const [heroOpacity, setHeroOpacity] = useState(1);
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

  // Always fit to canvas height, centered horizontally. The sign of
  // offsetX does the rest of the work on its own: on a normal or
  // narrow (mobile) viewport the frame overflows the width slightly
  // and crops at the sides (cover-like); on an ultra-wide viewport it
  // falls short of the width instead, leaving navy letterbox padding
  // left/right rather than stretching or over-cropping the mic.
  const paint = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    cssWidth: number,
    cssHeight: number
  ) => {
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const drawH = cssHeight;
    const drawW = drawH * imgRatio;
    ctx.drawImage(img, (cssWidth - drawW) / 2, 0, drawW, drawH);
  };

  const ready = (img: HTMLImageElement | undefined): img is HTMLImageElement =>
    Boolean(img?.complete && img.naturalWidth > 0);

  /**
   * Draw the single frame nearest the (fractional) scroll position — crisp,
   * never blended. With 202 frames the sequence is dense enough that snapping
   * to the closest whole frame reads as continuous motion, so no cross-fade
   * (which looked like motion blur) is needed.
   */
  const draw = useCallback((value: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const maxIndex = FRAME_COUNT - 1;
    const index = Math.min(maxIndex, Math.max(0, Math.round(value)));
    let img = imagesRef.current[index];

    // During the coarse pass only every COARSE_STRIDE-th frame exists, so the
    // exact frame is usually missing. Fall back to the nearest loaded
    // neighbour rather than bailing: the rotation stays scrubbable from the
    // first pass and simply sharpens as the second pass fills the gaps.
    if (!ready(img)) {
      for (let d = 1; d <= COARSE_STRIDE; d++) {
        const lo = imagesRef.current[index - d];
        if (index - d >= 0 && ready(lo)) {
          img = lo;
          break;
        }
        const hi = imagesRef.current[index + d];
        if (index + d <= maxIndex && ready(hi)) {
          img = hi;
          break;
        }
      }
      if (!ready(img)) return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssWidth = canvas.clientWidth;
    const cssHeight = canvas.clientHeight;
    if (canvas.width !== cssWidth * dpr || canvas.height !== cssHeight * dpr) {
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssWidth, cssHeight);
    paint(ctx, img, cssWidth, cssHeight);
  }, []);

  /**
   * Depth particles. Positions are generated once from a fixed seed so the
   * field is identical on every render (and between server and client) —
   * Math.random() here would reshuffle the whole field on each paint.
   * Each particle carries a depth: nearer ones are bigger, brighter, and
   * parallax further, which is what reads as three-dimensionality.
   */
  const particles = useRef(
    (() => {
      let seed = 20240719;
      const rand = () => {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return seed / 4294967296;
      };
      return Array.from({ length: 70 }, () => {
        const depth = rand();
        return {
          x: rand(),
          y: rand(),
          depth,
          radius: 0.6 + depth * 2.2,
          alpha: 0.12 + depth * 0.45,
          // Warm accent for most, a few cooler ones so it doesn't read as
          // a single flat colour wash.
          warm: rand() > 0.25,
          drift: 0.4 + rand() * 1.6,
        };
      });
    })()
  ).current;

  /**
   * Overlay FX: a parallax particle field for depth. Drawn from the same rAF
   * tick as the frame sequence, so there is no second animation loop and
   * nothing runs once scrolling settles.
   */
  const drawFx = useCallback((progress: number) => {
    const canvas = fxCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    // ---- Particles ----------------------------------------------------
    for (const p of particles) {
      // Deeper particles travel further as you scroll: classic parallax.
      const shift = progress * p.drift * h * 0.5;
      const y = ((p.y * h - shift) % (h + 80) + (h + 80)) % (h + 80) - 40;
      const x = p.x * w;
      ctx.beginPath();
      ctx.arc(x, y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.warm
        ? `rgba(240,144,79,${p.alpha})`
        : `rgba(255,255,255,${p.alpha * 0.5})`;
      ctx.fill();
    }

  }, [particles]);

  // Preload frames; draw frame 0 the moment it lands, as a poster.
  useEffect(() => {
    if (reducedMotion) return;
    let cancelled = false;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) images.push(new Image());
    imagesRef.current = images;

    let outstanding = 0;
    let fineStarted = false;

    const load = (i: number) => {
      const img = images[i];
      if (!img || img.src) return;
      outstanding++;
      img.onload = () => {
        if (cancelled) return;
        setLoadedCount((c) => c + 1);
        // Note: we deliberately do NOT force img.decode() on every frame.
        // 202 decoded 720p frames would pin ~750MB of bitmap memory and can
        // crash mobile browsers; decode-on-draw is cheap for these frames.
        if (i === 0) {
          draw(0);
          drawFx(0);
        }
        if (--outstanding === 0 && !fineStarted) {
          fineStarted = true;
          startFine();
        }
      };
      // A frame that 404s or decodes badly must not stall the second pass.
      img.onerror = () => {
        if (cancelled) return;
        if (--outstanding === 0 && !fineStarted) {
          fineStarted = true;
          startFine();
        }
      };
      img.src = frameSrc(i);
    };

    // Second pass: everything the coarse pass skipped.
    function startFine() {
      if (cancelled) return;
      for (let i = 0; i < FRAME_COUNT; i++) {
        if (i % COARSE_STRIDE !== 0) load(i);
      }
    }

    // First pass: frame 0 plus every 4th frame, so the full rotation is
    // scrubbable as soon as ~51 small images have landed.
    for (let i = 0; i < FRAME_COUNT; i += COARSE_STRIDE) load(i);

    return () => {
      cancelled = true;
    };
  }, [reducedMotion, draw, drawFx]);

  // Frames arrive asynchronously, and draw() bails on any frame that hasn't
  // loaded yet. Without this, the canvas stays stuck on whatever it managed to
  // paint until the next scroll event nudges it — which is why the sequence
  // used to need "a little scroll" before it came alive. Redrawing as frames
  // land means the mic is correct at the current position from the start.
  useEffect(() => {
    if (reducedMotion) return;
    draw(currentFrameRef.current);
  }, [loadedCount, reducedMotion, draw]);

  // Scroll-driven frame + chapter selection.
  useEffect(() => {
    if (reducedMotion) return;

    // How much of the remaining distance is covered each frame. Low enough
    // to smooth out coarse wheel/trackpad steps, high enough that the mic
    // still feels attached to the scroll rather than lagging behind it.
    const EASING = 0.22;

    const tick = () => {
      const target = targetFrameRef.current;
      const diff = target - currentFrameRef.current;

      // Close enough — settle exactly on target and stop the loop so we're
      // not holding a rAF open for the life of the page.
      if (Math.abs(diff) < 0.002) {
        currentFrameRef.current = target;
        draw(target);
        drawFx(target / (FRAME_COUNT - 1));
        runningRef.current = false;
        rafRef.current = null;
        return;
      }

      currentFrameRef.current += diff * EASING;
      draw(currentFrameRef.current);
      drawFx(currentFrameRef.current / (FRAME_COUNT - 1));
      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (runningRef.current) return;
      runningRef.current = true;
      rafRef.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 0 ? -rect.top / scrollable : 0;
      const clamped = Math.min(1, Math.max(0, progress));

      // Kept fractional so the easing loop can glide through frames; draw()
      // snaps to the nearest whole frame when it paints.
      targetFrameRef.current = clamped * (FRAME_COUNT - 1);
      frameRef.current = Math.round(targetFrameRef.current);
      start();

      // The hero owns the first 12% of the scroll, so the chapters start
      // after it rather than competing with it at rest. -1 means "none shown".
      const HERO_ZONE = 0.12;
      const chapter =
        clamped < HERO_ZONE
          ? -1
          : Math.min(
              chapters.length - 1,
              Math.floor(
                ((clamped - HERO_ZONE) / (1 - HERO_ZONE)) * chapters.length
              )
            );
      setActiveChapter(chapter);

      // The hero stays put for the whole pinned section — only the scroll cue
      // fades, once the visitor has clearly started scrolling.
      setHeroOpacity(1 - Math.min(1, clamped / 0.06));
    };

    // A resize changes the canvas pixel dimensions and the fit maths, so
    // redraw the current position immediately rather than easing to it.
    const onResize = () => {
      onScroll();
      draw(currentFrameRef.current);
      drawFx(currentFrameRef.current / (FRAME_COUNT - 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      runningRef.current = false;
    };
    // Deliberately excludes `loadedCount`: this effect only needs to run
    // once per mount (reducedMotion flip aside) — `draw()` always reads
    // the latest `imagesRef.current`, so re-subscribing on every one of
    // the 202 incremental loads would just churn listeners for no benefit.
  }, [reducedMotion, draw, drawFx]);

  if (reducedMotion) {
    return (
      <>
        {/* Reduced motion: hero over a single static frame, no animation. */}
        {hero && (
          <section className="relative min-h-[85vh] bg-black text-background">
            <NextImage
              src={frameSrc(80)}
              alt="Podcast microphone in a recording studio"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[35%_center] sm:object-center"
            />
            {hero}
          </section>
        )}
        <section className="bg-black py-24 text-background sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <NextImage
            src={frameSrc(80)}
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
                {c.cta && (
                  <div className="mt-4">
                    <Button href={c.cta.href}>{c.cta.label}</Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </section>
      </>
    );
  }

  return (
    // -mt-20 pulls the section up under the sticky 80px header so the image
    // sits behind it from first paint, rather than only sliding under it once
    // you scroll. The hero overlay adds matching top padding so its text still
    // clears the header.
    <section
      ref={sectionRef}
      className="relative -mt-20 bg-black"
      style={{ height: "480vh" }}
    >
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

        {/* FX layer: parallax particles for depth. Sits
            above the photo but *below* the vignette, so the same gradient
            that darkens the edges of the image also fades the particles into
            them — rather than leaving bright dots sitting on top of black. */}
        <canvas
          ref={fxCanvasRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />

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

        {/* Above-the-fold hero. Pinned for the whole section — always visible,
            never faded in or out — and present in the server HTML. */}
        {hero && <div className="absolute inset-0">{hero}</div>}

        {/* Scroll cue — sits bottom-centre, clear of the CTA, and fades with
            the hero so it doesn't linger over the chapter cards. */}
        {hero && (
          <div
            aria-hidden="true"
            style={{ opacity: heroOpacity }}
            className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sf-scroll-cue"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
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
                  // The hero is now pinned for the whole section, so on small
                  // screens show only the current card — a full accumulated
                  // stack would run past the hero. Desktop keeps the stack:
                  // there the hero sits right and the cards sit bottom-left.
                  className={i === activeChapter ? "" : "max-sm:!hidden"}
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
                      {c.cta && (
                        <div className="mt-4">
                          <Button href={c.cta.href}>{c.cta.label}</Button>
                        </div>
                      )}
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
