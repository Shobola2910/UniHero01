// src/components/TimelineAuto.tsx
"use client";

type Props = {
  /** "rtl" o‘ngdan chapga, "ltr" chapdan o‘ngga */
  direction?: "rtl" | "ltr";
  /** Bir to‘liq aylanish davomiyligi (sekundlarda). Katta bo‘lsa — sekinroq */
  durationSec?: number;
};

type Item = {
  emoji: string;
  date: string;
  title: string;
};

const ITEMS: Item[] = [
  { emoji: "🧠", date: "2025 · Mar", title: "Focused more on AI detectors and others" },
  { emoji: "🎉", date: "2025 · May", title: "100 students success" },
  { emoji: "🧑‍🤝‍🧑", date: "2024 · Oct", title: "2 anonym founders" },
  { emoji: "🤖", date: "2024 · Dec", title: "UniHero Bot created" },
  { emoji: "📥", date: "2025 · June", title: "UniHero Bot 200+ users" },
];

export default function TimelineAuto({
  direction = "rtl",
  durationSec = 28, // biroz sekin
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 ring-1 ring-white/10">
      {/* yong‘a tomondan silliq fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0b1a3a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0b1a3a] to-transparent" />

      <div className={`track ${direction}`}>
        <Row />
        <Row />
      </div>

      {/* styled-jsx: animatsiya nomi va davomiyligi */}
      <style jsx>{`
        .track {
          display: flex;
          gap: 16px;
          width: max-content;             /* ichki kontent bo‘yicha */
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: ${durationSec}s;
        }
        .track.rtl { animation-name: scroll-rtl; }
        .track.ltr { animation-name: scroll-ltr; }

        @keyframes scroll-rtl {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); } /* birinchi qator kengligi */
        }
        @keyframes scroll-ltr {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

function Row() {
  return (
    <div className="flex gap-4">
      {ITEMS.map((it, i) => (
        <Card key={i} {...it} />
      ))}
    </div>
  );
}

function Card({ emoji, date, title }: Item) {
  return (
    <div className="min-w-[280px] rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] p-4 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,.25)]">
      <div className="mb-2 flex items-center gap-2 text-sm text-white/80">
        <span className="text-lg">{emoji}</span>
        <span className="font-medium">{date}</span>
      </div>
      <div className="text-white font-semibold">{title}</div>
    </div>
  );
}
