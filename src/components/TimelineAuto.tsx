// src/components/TimelineAuto.tsx
"use client";

import { useEffect, useRef } from "react";

export default function TimelineAuto({
  items = [
    { emoji: "🤖", title: "Bot Created", date: "2024 · Dec" },
    { emoji: "🧑‍🤝‍🧑", title: "2 Anonym founders", date: "2024 · Oct" },
    { emoji: "🧠", title: "AI detectors focus", date: "2025 · Mar" },
    { emoji: "🎉", title: "180+ Students", date: "2025 · May" },
    { emoji: "📥", title: "200+ Bot users", date: "2025 · June" },
  ],
}: {
  items?: { emoji: string; title: string; date: string }[];
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  // simple right->left continuous scroll (slow)
  useEffect(() => {
    let id: number;
    let x = 0;
    const step = () => {
      x -= 0.3; // slower
      if (trackRef.current) trackRef.current.style.transform = `translateX(${x}px)`;
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
      <div ref={trackRef} className="flex gap-4 p-4 will-change-transform">
        {items.concat(items).map((it, i) => (
          <div key={i} className="min-w-[240px] rounded-xl bg-white/10 p-4 ring-1 ring-white/10">
            <div className="text-xl">{it.emoji}</div>
            <div className="mt-1 font-semibold">{it.title}</div>
            <div className="text-sm text-white/70">{it.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
