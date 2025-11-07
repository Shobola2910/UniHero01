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
  const [activeIdx, setActiveIdx] = useState(0);
  const [cardW, setCardW] = useState(540);
  const [gap, setGap] = useState(24);
  const paused = useRef(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-card]");
    const style = getComputedStyle(el);
    if (first) setCardW(Math.round(first.getBoundingClientRect().width));
    setGap(Math.round(parseFloat(style.columnGap || style.gap || "24")));
  }, []);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const id = setInterval(() => {
      if (paused.current) return;
      const next = (activeIdx + 1) % data.length;
      setActiveIdx(next);
      el.scrollTo({ left: next * (cardW + gap), behavior: "smooth" });
      if (next === ITEMS.length) {
        setTimeout(() => { el.scrollTo({ left: 0, behavior: "auto" }); setActiveIdx(0); }, 420);
      }
    }, 7000); // 7s
    return () => clearInterval(id);
  }, [activeIdx, data.length, cardW, gap]);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onWheel = (e: WheelEvent) => { if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) el.scrollLeft += e.deltaY; };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const center = ITEMS[activeIdx % ITEMS.length];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14" id="about">
      <div
        ref={ref}
        className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        {data.map((it, idx) => {
          const isActive = idx === activeIdx;
          return (
            <article key={`${it.title}-${idx}`} data-card className="relative w-[84vw] shrink-0 snap-start xs:w-[86vw] sm:w-[520px] md:w-[540px]">
              <div
                className="pointer-events-none absolute -left-2 -top-2 right-2 bottom-10 overflow-hidden rounded-3xl opacity-0 blur-xl transition-opacity duration-300"
                style={{ opacity: isActive ? 0.35 : 0 }}
              >
                <Image src={it.img} alt="" fill className="object-cover" sizes="540px" />
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-transform hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/9]">
                  <Image src={it.img} alt={it.title} fill className="object-cover" sizes="540px" priority={idx < 2} />
                </div>
                <div className="px-5 pb-5 pt-4">
                  <h3 className="flex items-center gap-2 text-lg font-extrabold text-white md:text-xl">
                    <span aria-hidden>{it.emoji}</span>{it.title}
                  </h3>
                  <p className="mt-1 text-white/80">{it.date}</p>
                  <div className="mt-3 h-[2px] w-3/4 rounded-full bg-white/60" />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <h4 className="text-2xl font-extrabold text-white md:text-3xl">🧑‍💻 {center.title}</h4>
        <div className="mx-auto mt-3 flex max-w-xl items-center gap-4">
          <span className="h-[2px] flex-1 rounded-full bg-white/60" />
          <span className="text-white/90">{center.date}</span>
          <span className="h-[2px] flex-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
