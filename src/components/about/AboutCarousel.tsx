// src/components/about/AboutCarousel.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = { emoji: string; date: string; title: string; img: string };

const ITEMS: Item[] = [
  { emoji: "🤖",      date: "2024 · Dec",  title: "UniHero Bot created",                 img: "/about/bot-created.png" },
  { emoji: "🧑‍🤝‍🧑", date: "2024 · Oct",  title: "2 anonym founders",                   img: "/about/anonym-founders.png" },
  { emoji: "🧠",      date: "2025 · Mar",  title: "Focused more on AI detectors and others", img: "/about/ai-detectors.png" },
  { emoji: "🎉",      date: "2025 · May",  title: "180 + students success",               img: "/about/students-success.png" },
  { emoji: "📥",      date: "2025 · June", title: "UniHero Bot 200+ users",               img: "/about/bot-200.png" },
];

export default function AboutCarousel() {
  // Infinite loop uchun dublikat
  const data = useMemo(() => [...ITEMS, ...ITEMS], []);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const sizesRef = useRef<{ cardW: number; gap: number }>({ cardW: 540, gap: 24 });
  const pausedRef = useRef(false);

  // Kartaning real eni va gap'ni o‘lchash
  const measure = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const firstCard = scroller.querySelector<HTMLElement>("[data-card]");
    if (!firstCard) return;

    const cardRect = firstCard.getBoundingClientRect();
    // column-gap (flex-rowda gorizontal gap) ni o‘qiymiz
    const style = getComputedStyle(scroller);
    const gap = parseFloat(style.columnGap || style.gap || "24") || 24;

    sizesRef.current.cardW = Math.round(cardRect.width);
    sizesRef.current.gap = Math.round(gap);
  };

  // Autoplay
  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    // reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReduced) {
      const id = setInterval(() => {
        if (pausedRef.current) return;
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const { cardW, gap } = sizesRef.current;
        const next = (activeIdx + 1) % data.length;
        const x = next * (cardW + gap);

        setActiveIdx(next);
        scroller.scrollTo({ left: x, behavior: "smooth" });

        // Loop: asl ro‘yxat tugagach, tezda boshiga qaytish
        if (next === ITEMS.length) {
          setTimeout(() => {
            scroller.scrollTo({ left: 0, behavior: "auto" });
            setActiveIdx(0);
          }, 420);
        }
      }, 5000);
      return () => clearInterval(id);
    }

    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, data.length]);

  // G‘ildirakni (wheel) gorizontalga yo‘naltirish
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      // vertical aylantirishni gorizontalga translate qilamiz
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-10 md:py-16"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <h2 className="mb-6 text-2xl font-extrabold text-brand-100 md:text-3xl">Our story</h2>

      <div className="relative">
        {/* Gradient chekkalar — brand.950 ni tailwind.config’da qo‘shamiz (2-bo‘lim) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-950 to-transparent" />

        <div
          ref={scrollerRef}
          className="hide-scrollbar flex snap-x snap-mandatory touch-pan-x gap-4 overflow-x-auto pb-2 pr-2 sm:gap-6 sm:pr-4"
        >
          {data.map((it, idx) => {
            const isActive = idx === activeIdx;
            return (
              <article
                key={`${it.title}-${idx}`}
                data-card
                className="relative w-[88vw] shrink-0 snap-start xs:w-[86vw] sm:w-[520px] md:w-[540px]"
              >
                {/* blur ghost */}
                <div
                  className="pointer-events-none absolute -left-2 -top-2 right-2 bottom-10 scale-[1.02] overflow-hidden rounded-3xl opacity-0 blur-xl transition-opacity duration-300"
                  style={{ opacity: isActive ? 0.35 : 0 }}
                >
                  <Image src={it.img} alt="" fill className="object-cover" sizes="540px" />
                </div>

                <div className="uh-card overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={it.img}
                      alt={it.title}
                      fill
                      className="object-cover"
                      sizes="540px"
                      priority={idx < 2}
                    />
                  </div>
                  <div className="px-5 pb-5 pt-4">
                    <h3 className="flex items-center gap-2 text-xl font-extrabold text-brand-100 md:text-2xl">
                      <span aria-hidden>{it.emoji}</span>
                      {it.title}
                    </h3>
                    <p className="mt-2 text-brand-100/85">{it.date}</p>
                    <div className="mt-3 h-[2px] w-3/4 rounded-full bg-white/60" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
