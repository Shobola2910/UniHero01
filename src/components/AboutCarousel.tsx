// src/components/AboutCarousel.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = {
  img: string;          // public papkaga nisbiy yo'l: "/about/1.jpg"
  badge?: string;       // masalan: "2024 · Oct"
  title: string;        // sarlavha
  caption?: string;     // qisqa izoh
};

export default function AboutCarousel({
  slides,
  intervalMs = 4500,     // avto aylanish tezligi
}: {
  slides: Slide[];
  intervalMs?: number;
}) {
  const [i, setI] = useState(0);
  const n = slides.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setI((p) => (p + 1) % n);
  const prev = () => setI((p) => (p - 1 + n) % n);
  const go = (k: number) => setI(k);

  // Auto-rotate (pause on hover)
  const start = () => {
    stop();
    timer.current = setInterval(next, intervalMs);
  };
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, n]);

  // Touch / swipe
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
    stop();
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const x = e.changedTouches[0].clientX;
    if (touchX.current !== null) {
      const dx = x - touchX.current;
      if (Math.abs(dx) > 40) dx > 0 ? prev() : next();
    }
    touchX.current = null;
    start();
  };

  return (
    <div
      className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5"
      onMouseEnter={stop}
      onMouseLeave={start}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Track */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {slides.map((s, idx) => (
          <div key={idx} className="relative h-[280px] md:h-[360px] w-full flex-none">
            <Image
              src={s.img}
              alt={s.title}
              fill
              priority={idx === 0}
              className="object-cover"
            />

            {/* Gradient/overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />

            {/* Text box */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              {s.badge && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
                  {s.badge}
                </span>
              )}
              <h3 className="mt-2 text-lg md:text-xl font-semibold drop-shadow">
                {s.title}
              </h3>
              {s.caption && (
                <p className="mt-1 text-sm text-white/85 drop-shadow">
                  {s.caption}
                </p>
              )}
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
      <div className="pointer-events-none absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, k) => (
          <button
            key={k}
            aria-label={`Go to slide ${k + 1}`}
            className={`pointer-events-auto h-2.5 w-2.5 rounded-full ring-1 ring-white/40 transition ${
              i === k ? "bg-white/90" : "bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => go(k)}
          />
        ))}
      </div>
    </div>
  );
}

