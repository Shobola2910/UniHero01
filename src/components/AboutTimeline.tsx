"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Item = {
  emoji: string;
  date: string;
  title: string;
  src: string; // /public ichidagi rasm yo'li
};

type Props = { items: Item[] };

/**
 * 3 ta karta ko'rinadi. Markazdagi kattaroq va aniq,
 * yonidagilar kichikroq va blur. Touch/mouse drag bilan scroll.
 */
export default function AboutTimeline({ items }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // active indeksni scrollga qarab hisoblash
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const card = el.querySelector<HTMLElement>("[data-card]");
        if (!card) return;
        const cardW = card.getBoundingClientRect().width + 24; // width + gap
        const center = el.scrollLeft + el.clientWidth / 2;
        const i = Math.round(center / cardW - 0.5);
        const clamped = Math.max(0, Math.min(items.length - 1, i));
        setActive(clamped);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [items.length]);

  const scrollToIndex = (i: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const cardW = card.getBoundingClientRect().width + 24;
    el.scrollTo({ left: i * cardW, behavior: "smooth" });
  };

  return (
    <section className="u-container py-10 md:py-16">
      <h1 className="text-center text-2xl md:text-3xl font-semibold text-white mb-6">
        About UniHero
      </h1>

      <div className="relative">
        {/* LEFT / RIGHT tugmalar (desktop) */}
        <button
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10
                     items-center justify-center rounded-full bg-white/10 text-white
                     border border-white/20 backdrop-blur hover:bg-white/20"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={() =>
            scrollToIndex(Math.min(items.length - 1, active + 1))
          }
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10
                     items-center justify-center rounded-full bg-white/10 text-white
                     border border-white/20 backdrop-blur hover:bg-white/20"
          aria-label="Next"
        >
          ›
        </button>

        {/* SCROLLER */}
        <div
          ref={wrapRef}
          className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 md:px-8 py-2
                     scroll-smooth touch-pan-x select-none"
          style={{ scrollPaddingLeft: "8px", scrollPaddingRight: "8px" }}
        >
          {items.map((it, i) => {
            const isActive = i === active;
            const isNear = Math.abs(i - active) === 1;

            const scale = isActive ? "scale-100" : "scale-[0.92]";
            const blur = isActive ? "blur-0" : isNear ? "blur-[1px]" : "blur-[2px]";
            const ring =
              isActive ? "ring-1 ring-white/30 shadow-soft" : "ring-0";

            return (
              <article
                key={i}
                data-card
                className={`snap-center transition-all duration-300 ease-out ${scale}`}
                style={{
                  // uchta ko‘rinishi uchun kengliklar
                  minWidth: "85vw",
                }}
              >
                <div
                  className={`relative overflow-hidden rounded-3xl bg-brand-900/40 border border-white/10 ${ring}`}
                >
                  <div className={`relative w-full aspect-[16/9] ${blur}`}>
                    <Image
                      src={it.src}
                      alt={it.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 40vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>

                  {/* Pastki matn bloki */}
                  <div className="px-5 md:px-6 py-4 text-white">
                    <div className="text-lg md:text-xl font-semibold flex items-center gap-2">
                      <span aria-hidden>{it.emoji}</span>
                      {it.title}
                    </div>
                    <div className="text-sm opacity-75 mt-1">{it.date}</div>
                    <div className="mt-3 h-[2px] w-40 bg-white/60 rounded-full" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* DOTS */}
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to ${i + 1}`}
            className={`h-2 w-2 rounded-full transition ${
              i === active ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* helpers */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (min-width: 768px) {
          [data-card] { min-width: 60vw; }
        }
        @media (min-width: 1024px) {
          [data-card] { min-width: 38vw; } /* 3 ta ko'rinishi uchun */
        }
      `}</style>
    </section>
  );
}
