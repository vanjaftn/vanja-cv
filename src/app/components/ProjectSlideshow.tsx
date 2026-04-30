"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Image = { src: string; alt: string };

export function ProjectSlideshow({
  images,
  interval = 4500,
  className = "",
}: {
  images: Image[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const total = images.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number) => {
      if (total === 0) return;
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  // Auto-advance — restarts whenever index changes (manual nav included),
  // pauses on hover, focus, or hidden tab.
  const isActive = !paused && !tabHidden && total > 1;
  useEffect(() => {
    if (!isActive) return;
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % total);
    }, interval);
    return () => window.clearTimeout(id);
  }, [isActive, total, interval, index]);

  // Pause when the tab isn't visible.
  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Keyboard support when the carousel is focused.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(index + 1);
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go, index]);

  if (total === 0) return null;

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className={`relative aspect-[16/10] overflow-hidden rounded-lg border border-beige-200 bg-beige-100 outline-none focus-visible:ring-2 focus-visible:ring-beige-900 ${className}`}
    >
      {images.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          aria-hidden={i !== index}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          draggable={false}
        />
      ))}

      {total > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-beige-200 bg-white/90 text-beige-900 shadow-sm backdrop-blur-sm transition hover:bg-white hover:scale-105 active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-beige-200 bg-white/90 text-beige-900 shadow-sm backdrop-blur-sm transition hover:bg-white hover:scale-105 active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-beige-200 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-beige-900" : "w-1.5 bg-beige-400 hover:bg-beige-600"
                }`}
              />
            ))}
          </div>

          <span className="absolute right-3 top-3 rounded-full border border-beige-200 bg-white/90 px-2.5 py-1 text-xs font-medium text-beige-700 backdrop-blur-sm tabular-nums">
            {index + 1} / {total}
          </span>

          {/* Auto-advance progress bar — animates from 0 → 100% per slide,
              paused via animation-play-state when the carousel is paused. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-beige-200/60">
            <div
              key={`${index}-${isActive ? "run" : "stop"}`}
              className="h-full origin-left bg-beige-900/70"
              style={{
                animation: `slideshow-progress ${interval}ms linear forwards`,
                animationPlayState: isActive ? "running" : "paused",
              }}
            />
          </div>

          <style>{`
            @keyframes slideshow-progress {
              from { transform: scaleX(0); }
              to { transform: scaleX(1); }
            }
          `}</style>
        </>
      )}
    </div>
  );
}
