"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const slides = [
  { 
    emoji: "🤖", 
    date: "2024 · Dec", 
    title: "UniHero Bot Created", 
    img: "/images/1-unihero-bot-created.png" 
  },
  { 
    emoji: "🧑‍🤝‍🧑", 
    date: "2024 · Oct", 
    title: "2 Anonym Founders", 
    img: "/images/2-anonym-founders.png" 
  },
  { 
    emoji: "🧠", 
    date: "2025 · Mar", 
    title: "Focused more on AI detectors and others", 
    img: "/images/3-ai-detectors.png" 
  },
  { 
    emoji: "🎉", 
    date: "2025 · May", 
    title: "180+ Students success", 
    img: "/images/4-students-success.png" 
  },
  { 
    emoji: "📥", 
    date: "2025 · June", 
    title: "UniHero Bot 200+ users", 
    img: "/images/5-bot-200-users.png" 
  },
];

export default function AboutPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 sec
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 space-y-10">
      <SectionHeader
        title="Our Story"
        subtitle="Milestones from idea to impact"
      />

      <div className="relative w-full h-[420px] overflow-hidden rounded-3xl border border-white/10 ring-1 ring-white/10">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              className="object-cover blur-sm brightness-[0.9]"
              priority={i === 0}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <div className="text-4xl mb-2">{slide.emoji}</div>
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="text-white/80 mt-1">{slide.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 text-center">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-white/70 max-w-3xl mx-auto">
          Our goal is to empower students with smart learning tools,
          real-time help, and a supportive community — connecting education
          with innovation under one platform.
        </p>
      </div>
    </div>
  );
}
