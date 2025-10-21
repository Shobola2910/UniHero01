// src/components/AboutCarousel.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Milestone = {
  emoji: string;
  date: string;
  title: string;
};

export default function AboutCarousel({
  items,
  intervalMs = 10000, // har 10s da almashadi
}: {
  items: Milestone[];
  intervalMs?: number;
}) {
  const n = items.length;
  const [i, setI] = useState(0);
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef<number | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setI((p) => (p + 1) % n);
  const prev = () => setI((p) => (p - 1 + n) % n);

  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };
  const start = () => {
    stop();
    timer.current = setInterval(next, intervalMs);
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, n]);

  // Pointer (mouse/touch) drag
  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    setDragging(true);
    stop();
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    setDx(e.clientX - startX.current);
  };
  const onPointerUp = () => {
    if (startX.current !== null) {
      const threshold = 60; // qancha ko‘chsa — sahifa almashadi
      if (dx > threshold) prev();
      else if (dx < -threshold) next();
    }
    startX.current = null;
    setDx(0);
    setDragging(false);
    start();
  };

  return (
    <div
      className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onMouseLeave={() => dragging && onPointerUp()}
    >
      {/* Blurli yon chetlar */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-16 bg-gradient-to-r from-[#0b1e3b]/70 to-transparent backdrop-blur-[2px]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-16 bg-gradient-to-l from-[#0b1e3b]/70 to-transparent backdrop-blur-[2px]" />

      {/* Track */}
      <div
        className={`flex transition-transform duration-500 ease-out ${
          dragging ? "!duration-0 cursor-grabbing" : "cursor-grab"
        }`}
        style={{ transform: `translateX(calc(${-i * 100}% + ${dx}px))` }}
      >
        {items.map((m, idx) => (
          <div
            key={idx}
            className="w-full flex-none p-5 md:p-6"
            // har bir slayd butun kenglik
          >
            <div className="h-[210px] md:h-[240px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10 shadow-sm flex items-center gap-4 px-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 text-2xl">
                {m.emoji}
              </div>
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/15">
                  {m.date}
                </div>
                <h3 className="mt-2 text-lg md:text-xl font-semibold leading-snug">
                  {m.title}
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  UniHero timeline highlight
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        aria-label="Prev"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/35 p-2 ring-1 ring-white/20 hover:bg-black/45"
      >
        ←
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/35 p-2 ring-1 ring-white/20 hover:bg-black/45"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {items.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Go to slide ${k + 1}`}
            className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/40 transition ${
              i === k ? "bg-white/90" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
