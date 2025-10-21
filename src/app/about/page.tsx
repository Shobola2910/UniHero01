// src/app/about/page.tsx
"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";

type Slide = {
  emoji: string;
  date: string;
  title: string;
  img: string; // /public/images/...
};

const SLIDES: Slide[] = [
  { emoji: "🤖", date: "2024 · Dec", title: "UniHero Bot created",        img: "/images/1-unihero-bot-created.png" },
  { emoji: "🧑‍🤝‍🧑", date: "2024 · Oct", title: "2 anonym founders",      img: "/images/2-anonym-founders.png" },
  { emoji: "🧠", date: "2025 · Mar", title: "Focused more on AI detectors and others", img: "/images/3-ai-detectors.png" },
  { emoji: "🎉", date: "2025 · May", title: "180+ Students success",       img: "/images/4-students-success.png" },
  { emoji: "📥", date: "2025 · June", title: "UniHero Bot 200+ users",     img: "/images/5-bot-200-users.png" },
];

export default function AboutPage() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hovering = useRef(false);

  const count = SLIDES.length;

  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  // autoplay (5s). Pause on hover, resume on leave.
  useEffect(() => {
    if (hovering.current) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, [index, count]);

  // Helpers to compute which slide is left/center/right
  const positions = useMemo(() => {
    // Map each slide to a role: "left" | "center" | "right" | "hidden"
    return SLIDES.map((_, i) => {
      const delta = (i - index + count) % count;
      if (delta === 0) return "center";
      if (delta === 1) return "right";
      if (delta === count - 1) return "left";
      return "hidden";
    });
  }, [index, count]);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 space-y-10">
      <SectionHeader title="Our Story" subtitle="Milestones from idea to impact" />

      {/* Carousel */}
      <div
        className="relative mx-auto h-[420px] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 ring-1 ring-white/10 bg-white/[0.02]"
        onMouseEnter={() => {
          hovering.current = true;
          if (timerRef.current) clearInterval(timerRef.current);
        }}
        onMouseLeave={() => {
          hovering.current = false;
          timerRef.current = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
        }}
      >
        {/* Cards */}
        {SLIDES.map((s, i) => {
          const role = positions[i];

          // styles per role
          const base =
            "absolute top-1/2 -translate-y-1/2 transition-all duration-500 will-change-transform";
          let x = "translate-x-0";
          let z = "z-10";
          let scale = "scale-100";
          let blur = "blur-0";
          let opacity = "opacity-100";
          let pointer = "pointer-events-auto";

        if (role === "left") {
            x = "-translate-x-[115%] md:-translate-x-[90%]";
            z = "z-0";
            scale = "scale-[0.92]";
            blur = "blur-[1.5px]";
            opacity = "opacity-80";
            pointer = "cursor-pointer";
          } else if (role === "right") {
            x = "translate-x-[115%] md:translate-x-[90%]";
            z = "z-0";
            scale = "scale-[0.92]";
            blur = "blur-[1.5px]";
            opacity = "opacity-80";
            pointer = "cursor-pointer";
          } else if (role === "hidden") {
            x = "translate-x-[220%]";
            z = "z-0";
            scale = "scale-[0.90]";
            blur = "blur-sm";
            opacity = "opacity-0";
            pointer = "pointer-events-none";
          }

          const handleClick = () => {
            if (role === "left") prev();
            if (role === "right") next();
          };

          return (
            <figure
              key={i}
              onClick={handleClick}
              className={`${base} ${x} ${z} ${scale} ${opacity} ${pointer} w-[82%] md:w-[60%] lg:w-[56%]`}
            >
              <div className={`relative aspect-[16/9] overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/10 ${blur}`}>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width:1024px) 56vw, 82vw"
                  className="object-cover"
                  priority={i === 0}
                />
                {/* caption */}
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 md:p-5">
                  <div className="flex items-center gap-2 text-sm md:text-base">
                    <span>{s.emoji}</span>
                    <span className="font-semibold drop-shadow">{s.title}</span>
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-white/80">{s.date}</div>
                </figcaption>
              </div>
            </figure>
          );
        })}

        {/* Controls */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="group absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
        >
          <svg className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:scale-105 transition"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          aria-label="Next"
          onClick={next}
          className="group absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
        >
          <svg className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:scale-105 transition"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mission block */}
      <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 text-center">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-white/70 max-w-3xl mx-auto">
          Our goal is to empower students with smart learning tools, real-time help and
          a supportive community — connecting education with innovation under one platform.
        </p>
      </div>
    </div>
  );
}
