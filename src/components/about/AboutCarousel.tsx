"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = { emoji: string; date: string; title: string; img: string; };

const ITEMS: Item[] = [
  { emoji: "🤖",        date: "2024 · Dec", title: "UniHero Bot created",                          img: "/about/bot-created.png" },
  { emoji: "🧑‍🤝‍🧑",   date: "2024 · Oct", title: "2 anonym founders",                            img: "/about/anonym-founders.png" },
  { emoji: "🧠",        date: "2025 · Mar", title: "Focused more on AI detectors and others",      img: "/about/ai-detectors.png" },
  { emoji: "🎉",        date: "2025 · May", title: "180 + students success",                        img: "/about/students-success.png" },
  { emoji: "📥",        date: "2025 · June",title: "UniHero Bot 200+ users",                        img: "/about/bot-200.png" },
];

export default function AboutCarousel() {
  const data = useMemo(() => [...ITEMS, ...ITEMS], []);
  const scroller = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const CARD_W = 540; // px
  const GAP = 24;

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const id = setInterval(() => {
      const next = (activeIdx + 1) % data.length;
      setActiveIdx(next);
      el.scrollTo({ left: next * (CARD_W + GAP), behavior: "smooth" });

      if (next === ITEMS.length) {
        setTimeout(() => { el.scrollTo({ left: 0, behavior: "auto" }); setActiveIdx(0); }, 420);
      }
    }, 5000);

    return () => clearInterval(id);
  }, [activeIdx, data.length]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-brand-100 mb-6">Our story</h2>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-950 to-transparent" />

        <div
          ref={scroller}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 pr-2 sm:pr-4 hide-scrollbar touch-pan-x"
        >
          {data.map((it, idx) => {
            const isActive = idx === activeIdx;
            return (
              <article key={`${it.title}-${idx}`} className="relative shrink-0 snap-start w-[88vw] xs:w-[86vw] sm:w-[520px] md:w-[540px]">
                {/* blur ghost */}
                <div
                  className="absolute -left-2 -top-2 right-2 bottom-10 rounded-3xl overflow-hidden opacity-0 blur-xl scale-[1.02] transition-opacity duration-300 pointer-events-none"
                  style={{ opacity: isActive ? 0.35 : 0 }}
                >
                  <Image src={it.img} alt="" fill className="object-cover" sizes="540px" />
                </div>

                <div className="uh-card bg-white/5 border-white/10 rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-transform">
                  <div className="relative aspect-[16/9]">
                    <Image src={it.img} alt={it.title} fill className="object-cover" sizes="540px" priority={idx < 2} />
                  </div>
                  <div className="px-5 pt-4 pb-5">
                    <h3 className="text-xl md:text-2xl font-extrabold text-brand-100 flex items-center gap-2">
                      <span aria-hidden>{it.emoji}</span>{it.title}
                    </h3>
                    <p className="mt-2 text-brand-100/85">{it.date}</p>
                    <div className="mt-3 h-[2px] w-3/4 bg-white/60 rounded-full" />
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
