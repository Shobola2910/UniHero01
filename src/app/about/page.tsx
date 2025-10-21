// src/app/about/page.tsx
"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";

type Slide = { emoji: string; date: string; title: string; img: string };

const SLIDES: Slide[] = [
  { emoji: "🤖", date: "2024 · Dec", title: "UniHero Bot created", img: "/images/1-unihero-bot-created.png" },
  { emoji: "🧑‍🤝‍🧑", date: "2024 · Oct", title: "2 anonym founders", img: "/images/2-anonym-founders.png" },
  { emoji: "🧠", date: "2025 · Mar", title: "Focused more on AI detectors and others", img: "/images/3-ai-detectors.png" },
  { emoji: "🎉", date: "2025 · May", title: "180+ Students success", img: "/images/4-students-success.png" },
  { emoji: "📥", date: "2025 · June", title: "UniHero Bot 200+ users", img: "/images/5-bot-200-users.png" },
];

export default function AboutPage() {
  const [i, setI] = useState(0);
  const n = SLIDES.length;

  const prev = useCallback(() => setI((x) => (x - 1 + n) % n), [n]);
  const next = useCallback(() => setI((x) => (x + 1) % n), [n]);

  // autoplay 5s — pause on hover
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hovering = useRef(false);

  useEffect(() => {
    if (hovering.current) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setI((x) => (x + 1) % n), 5000);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [i, n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const lastWheel = useRef(0);
  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const now = Date.now();
    if (now - lastWheel.current < 500) return;
    lastWheel.current = now;
    if (e.deltaY > 0) next(); else prev();
  };

  const roles = useMemo(
    () =>
      SLIDES.map((_, k) => {
        const d = (k - i + n) % n;
        if (d === 0) return "center";
        if (d === 1) return "right";
        if (d === n - 1) return "left";
        return "hidden";
      }),
    [i, n]
  );

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 space-y-10">
      <SectionHeader title="Our Story" subtitle="Milestones from idea to impact" />

      <div
        className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 ring-1 ring-white/10"
        onMouseEnter={() => { hovering.current = true; if (timerRef.current) clearInterval(timerRef.current); }}
        onMouseLeave={() => { hovering.current = false; timerRef.current = setInterval(() => setI((x) => (x + 1) % n), 5000); }}
        onWheel={onWheel}
      >
        {SLIDES.map((s, k) => {
          const role = roles[k];
          let left = "50%";
          let scale = "scale-100";
          let blur = "blur-0";
          let opacity = "opacity-100";
          let z = "z-20";
          let pointer = "pointer-events-auto";

          if (role === "left") {
            left = "16.66%"; scale = "scale-[0.93]"; blur = "blur-[1.2px]"; opacity = "opacity-85"; z = "z-10"; pointer = "cursor-pointer";
          } else if (role === "right") {
            left = "83.33%"; scale = "scale-[0.93]"; blur = "blur-[1.2px]"; opacity = "opacity-85"; z = "z-10"; pointer = "cursor-pointer";
          } else if (role === "hidden") {
            left = "120%"; scale = "scale-[0.9]"; blur = "blur-sm"; opacity = "opacity-0"; z = "z-0"; pointer = "pointer-events-none";
          }

          const click = () => { if (role === "left") prev(); if (role === "right") next(); };

          return (
            <figure
              key={k}
              onClick={click}
              className={`absolute top-1/2 -translate-y-1/2 aspect-[16/9] w-[32%] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-xl transition-all duration-500 will-change-transform ${scale} ${opacity} ${z} ${pointer}`}
              style={{ left, transform: `translate(-50%, -50%)` }}
            >
              <div className={`relative h-full w-full ${blur}`}>
                <Image src={s.img} alt={s.title} fill className="object-cover" priority={k === 0} />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span>{s.emoji}</span>
                  <span className="font-semibold drop-shadow">{s.title}</span>
                </div>
                <div className="mt-1 text-xs md:text-sm text-white/80">{s.date}</div>
              </figcaption>
            </figure>
          );
        })}

        {/* prev/next */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="group absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
        >
          <svg className="h-6 w-6 text-white transition group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="group absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
        >
          <svg className="h-6 w-6 text-white transition group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mission */}
      <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 text-center">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-white/70 max-w-3xl mx-auto">
          Our goal is to empower students with smart learning tools, real-time help and a supportive community —
          connecting education with innovation under one platform.
        </p>
      </div>
    </div>
  );
}
