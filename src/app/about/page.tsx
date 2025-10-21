"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";

type Slide = {
  emoji: string;
  date: string;
  title: string;
  img: string;
};

const slides: Slide[] = [
  {
    emoji: "🤖",
    date: "2024 · Dec",
    title: "UniHero Bot Created",
    img: "/images/1-unihero-bot-created.png",
  },
  {
    emoji: "🧑‍🤝‍🧑",
    date: "2024 · Oct",
    title: "2 Anonym Founders",
    img: "/images/2-anonym-founders.png",
  },
  {
    emoji: "🧠",
    date: "2025 · Mar",
    title: "Focused more on AI detectors and others",
    img: "/images/3-ai-detectors.png",
  },
  {
    emoji: "🎉",
    date: "2025 · May",
    title: "180+ Students success",
    img: "/images/4-students-success.png",
  },
  {
    emoji: "📥",
    date: "2025 · June",
    title: "UniHero Bot 200+ users",
    img: "/images/5-bot-200-users.png",
  },
];

const AUTOPLAY_MS = 5000; // 5s

export default function AboutPage() {
  /** Infinite loop uchun 1-ta oldingi va 1-ta keyingi mirror slaydni qo‘shamiz */
  const looped = useMemo(
    () => [slides[slides.length - 1], ...slides, slides[0]],
    []
  );

  const [index, setIndex] = useState(1); // markaz — 1 (looped bo‘yicha)
  const railRef = useRef<HTMLDivElement>(null);

  // ---- Drag / swipe holati ----
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  // Autoplay
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  // Markazga smooth scroll + chetga borganda “sakratish”
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const cards = rail.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards.length) return;

    const cardWidth = cards[0].offsetWidth + 16; // gap-4(=16px)
    rail.scrollTo({ left: cardWidth * (index - 1), behavior: "smooth" });

    const fixAfterSmooth = setTimeout(() => {
      if (index === 0) {
        setIndex(looped.length - 2);
        rail.scrollTo({ left: cardWidth * (looped.length - 3), behavior: "auto" });
      } else if (index === looped.length - 1) {
        setIndex(1);
        rail.scrollTo({ left: 0, behavior: "auto" });
      }
    }, 400);

    return () => clearTimeout(fixAfterSmooth);
  }, [index, looped.length]);

  // Drag handlers
  const onDown = (clientX: number) => {
    const rail = railRef.current!;
    drag.current = { active: true, startX: clientX, startScroll: rail.scrollLeft };
  };
  const onMove = (clientX: number) => {
    if (!drag.current.active) return;
    const rail = railRef.current!;
    rail.scrollLeft = drag.current.startScroll - (clientX - drag.current.startX);
  };
  const onUp = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    snapToClosest();
  };

  const snapToClosest = () => {
    const rail = railRef.current!;
    const cards = rail.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth + 16;
    const approx = Math.round(rail.scrollLeft / cardWidth) + 1;
    setIndex(approx);
  };

  const centerSlide = looped[index];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 space-y-10">
      <SectionHeader title="Our Story" subtitle="Milestones from idea to impact" />

      {/* RAIL */}
      <div
        ref={railRef}
        className="
          relative no-scrollbar flex gap-4 overflow-x-auto scroll-smooth
          rounded-3xl border border-white/10 ring-1 ring-white/10
          p-4 bg-white/5
          select-none
        "
        onMouseDown={(e) => onDown(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseLeave={onUp}
        onMouseUp={onUp}
        onTouchStart={(e) => onDown(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={onUp}
      >
        {looped.map((s, i) => {
          const isCenter = i === index;
          const isSide = i === index - 1 || i === index + 1;

          return (
            <div
              key={`${s.title}-${i}`}
              data-card
              onClick={() => setIndex(i)}
              className={[
                "relative overflow-hidden rounded-2xl ring-1 ring-white/10",
                "min-w-[320px] md:min-w-[520px] xl:min-w-[640px]",
                "h-[220px] md:h-[300px] xl:h-[340px]",
                "transition-all duration-300 ease-out",
                isCenter ? "scale-[1.0]" : "scale-[0.93]",
                isSide ? "opacity-90 blur-[1px]" : isCenter ? "opacity-100" : "opacity-60 blur-[2px]",
                "shadow-[0_18px_45px_rgba(0,0,0,.35)]",
              ].join(" ")}
            >
              {/* BG image */}
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 320px, (max-width: 1280px) 520px, 640px"
                className="object-cover"
                priority={i === 1}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
              {/* Small label in card */}
              <div className="absolute bottom-3 left-4">
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15 backdrop-blur">
                  <span className="mr-1">{s.emoji}</span>
                  {s.date}
                </div>
                <div className="mt-1 text-lg font-semibold drop-shadow">{s.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Caption — markazdagi slayd uchun */}
      {centerSlide && (
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-semibold">
            <span className="mr-2">{centerSlide.emoji}</span>
            {centerSlide.title}
          </div>
          <div className="text-white/70 mt-1">{centerSlide.date}</div>
          <div className="mx-auto mt-3 h-[2px] w-4/5 max-w-md rounded-full bg-white/30" />
        </div>
      )}

      {/* Mission */}
      <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 text-center">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-white/70 max-w-3xl mx-auto">
          Our goal is to empower students with smart learning tools, real-time help, and a supportive
          community — connecting education with innovation under one platform.
        </p>
      </div>
    </div>
  );
}
