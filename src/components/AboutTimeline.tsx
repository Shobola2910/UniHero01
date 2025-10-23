"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = {
  emoji: string;
  date: string;
  title: string;
  src: string; // image path in /public
};

type Props = {
  items: Item[];
};

export default function AboutTimeline({ items }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [cardW, setCardW] = useState(0);

  // measure card width (based on first child)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-card]");
    if (!firstCard) return;

    const measure = () => {
      setCardW(firstCard.getBoundingClientRect().width);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // derive center index from scrollLeft
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !cardW) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = el.scrollLeft + el.clientWidth / 2;
        const i = Math.round(center / (cardW + 16 /* gap */) - 0.5);
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
  }, [items.length, cardW]);

  const scrollTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el || !cardW) return;
    const x = i * (cardW + 16); // card width + gap
    el.scrollTo({ left: x, behavior: "smooth" });
  };

  const canPrev = active > 0;
  const canNext = active < items.length - 1;

  return (
    <section className="u-container py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
        About UniHero
      </h2>

      <div className="relative">
        {/* Prev / Next buttons */}
        <button
          onClick={() => canPrev && scrollTo(active - 1)}
          disabled={!canPrev}
          aria-label="Previous"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center
                     rounded-full bg-white/10 text-white border border-white/20 backdrop-blur
                     hover:bg-white/20 disabled:opacity-40"
        >
          ‹
        </button>

        <button
          onClick={() => canNext && scrollTo(active + 1)}
          disabled={!canNext}
          aria-label="Next"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center
                     rounded-full bg-white/10 text-white border border-white/20 backdrop-blur
                     hover:bg-white/20 disabled:opacity-40"
        >
          ›
        </button>

        {/* Scroller */}
        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory px-2 md:px-8 py-4
                     scroll-smooth select-none touch-pan-x"
          style={{ scrollPaddingLeft: "8px", scrollPaddingRight: "8px" }}
        >
          {items.map((it, i) => {
            // visual states
            const isActive = i === active;
            const near = Math.abs(i - active) === 1;

            const scale = isActive ? "scale-100" : "scale-[0.92]";
            const blur = isActive ? "blur-0" : near ? "blur-[1px]" : "blur-[2px]";
            const opacity = isActive ? "opacity-100" : "opacity-80";

            return (
              <article
                key={i}
                data-card
                className={`snap-center transition-all duration-300 ease-out
                           ${scale} ${opacity}`}
                style={{
                  // consistent sizes across breakpoints
                  // (center feels larger due to scale and shadow)
                  minWidth: "85vw",
                }}
              >
                <div
                  className={`relative rounded-3xl overflow-hidden bg-brand-900/40 border border-white/10
                              shadow-soft ${blur}`}
                >
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={it.src}
                      alt={it.title}
                      fill
                      sizes="(max-width:768px) 85vw, 60vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>

                  <div className="px-5 md:px-6 py-4 text-white">
                    <div className="text-lg md:text-xl font-semibold flex items-center gap-2">
                      <span aria-hidden>{it.emoji}</span>
                      {it.title}
                    </div>
                    <div className="text-sm opacity-75 mt-1">{it.date}</div>
                    {/* underline like your reference */}
                    <div className="mt-3 h-[2px] w-40 bg-white/60 rounded-full" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to item ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2 w-2 rounded-full transition
              ${i === active ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (min-width: 768px) {
          [data-card] { min-width: 60vw; }
        }
        @media (min-width: 1024px) {
          [data-card] { min-width: 42vw; }
        }
      `}</style>
    </section>
  );
}
