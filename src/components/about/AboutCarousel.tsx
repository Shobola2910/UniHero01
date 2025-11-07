// src/components/about/AboutSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = { emoji: string; date: string; title: string; img: string };

const ITEMS: Item[] = [
  { emoji: "🤖",      date: "2024 · Dec",  title: "UniHero Bot created",                     img: "/images/1-unihero-bot-created.png" },
  { emoji: "🧑‍🤝‍🧑", date: "2024 · Oct",  title: "2 anonym founders",                       img: "/images/2-anonym-founders.png" },
  { emoji: "🧠",      date: "2025 · Mar",  title: "Focused more on AI detectors and others", img: "/images/3-ai-detectors.png" },
  { emoji: "🎉",      date: "2025 · May",  title: "180+ Students success",                   img: "/images/4-students-success.png" },
  { emoji: "📥",      date: "2025 · June", title: "UniHero Bot 200+ users",                  img: "/images/5-bot-200-users.png" },
];

export default function AboutSection() {
  const data = useMemo(() => [...ITEMS, ...ITEMS], []);
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  const [activeIdx, setActiveIdx] = useState(0);
  const [cardW, setCardW] = useState(540);
  const [gap, setGap] = useState(24);

  // o'lchamlar
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-card]");
    if (first) setCardW(Math.round(first.getBoundingClientRect().width));
    const cs = getComputedStyle(el);
    const g = parseFloat(cs.getPropertyValue("gap") || cs.getPropertyValue("column-gap") || "24");
    setGap(Number.isFinite(g) ? Math.round(g) : 24);
  }, []);

  // avto skroll — 7s
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const id = setInterval(() => {
      if (paused.current) return;
      const next = (activeIdx + 1) % data.length;
      setActiveIdx(next);
      el.scrollTo({ left: next * (cardW + gap), behavior: "smooth" });

      if (next === ITEMS.length) {
        setTimeout(() => {
          el.scrollTo({ left: 0, behavior: "auto" });
          setActiveIdx(0);
        }, 420);
      }
    }, 7000);

    return () => clearInterval(id);
  }, [activeIdx, data.length, cardW, gap]);

  // trəkpad vertikalni gorizontalga
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const center = ITEMS[activeIdx % ITEMS.length];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div
        ref={ref}
        className="hide-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        {data.map((it, idx) => {
          const isActive = idx === activeIdx;
          return (
            <article
              key={`${it.title}-${idx}`}
              data-card
              className="relative shrink-0 snap-start w-[84vw] xs:w-[86vw] sm:w-[520px] md:w-[540px]"
            >
              {/* blur shadow */}
              <div
                className="pointer-events-none absolute -left-2 -top-2 right-2 bottom-10 rounded-3xl overflow-hidden opacity-0 blur-xl transition-opacity duration-300"
                style={{ opacity: isActive ? 0.35 : 0 }}
              >
                <Image src={it.img} alt="" fill sizes="540px" className="object-cover" />
              </div>

              <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:-translate-y-1 hover:shadow-xl transition-transform">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={it.img}
                    alt={it.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 540px"
                    className="object-cover"
                    priority={idx < 2}
                  />
                </div>
                <div className="px-5 pt-4 pb-5">
                  <h3 className="text-lg md:text-xl font-extrabold flex items-center gap-2">
                    <span aria-hidden>{it.emoji}</span>
                    {it.title}
                  </h3>
                  <p className="mt-1 text-white/80">{it.date}</p>
                  <div className="mt-3 h-[2px] w-3/4 rounded-full bg-white/60" />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* pastdagi markaziy sarlavha */}
      <div className="mt-6 text-center">
        <h4 className="text-2xl md:text-3xl font-extrabold">🧑‍💻 {center.title}</h4>
        <div className="mx-auto mt-3 max-w-xl flex items-center gap-4">
          <span className="flex-1 h-[2px] rounded-full bg-white/60" />
          <span className="text-white/90">{center.date}</span>
          <span className="flex-1 h-[2px] rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
