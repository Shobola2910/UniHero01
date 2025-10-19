"use client";
import { useEffect, useRef, useState } from "react";

type Mouse = { x: number; y: number; inside: boolean };
type Pill = { href: string; icon: string; text: string };

const PILLS: Pill[] = [
  { href: "https://t.me/UniHero_news",  icon: "📣", text: "@UniHero_news" },
  { href: "https://t.me/UniHero_BOT",   icon: "🤖", text: "@UniHero_BOT" },
  { href: "https://t.me/UniHero_admin", icon: "👤", text: "@UniHero_admin" },
];

export default function HeroSocialPills() {
  const [mouse, setMouse] = useState<Mouse>({ x: 0, y: 0, inside: false });

  return (
    <section
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY, inside: true })}
      onMouseLeave={() => setMouse((s) => ({ ...s, inside: false }))}
      className="
        rounded-3xl ring-1 ring-white/10
        bg-gradient-to-b from-[#0f2250] to-[#152d66]
        px-6 py-7 text-white shadow-[0_12px_30px_rgba(0,0,0,.35)]
      "
    >
      <h3 className="mb-4 text-xl font-bold">Join UniHero on Telegram</h3>

      <div className="flex flex-wrap gap-4">
        {PILLS.map((p) => (
          <MagneticPill key={p.text} pill={p} mouse={mouse} />
        ))}
      </div>
    </section>
  );
}

function MagneticPill({ pill, mouse }: { pill: Pill; mouse: Mouse }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!mouse.inside) {
      setStyle({ transform: "" });
      return;
    }

    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = mouse.x - cx;
    const dy = mouse.y - cy;
    const dist = Math.hypot(dx, dy);
    const influence = 260; // ta'sir radiusi (px)

    const t = Math.max(0, 1 - dist / influence); // 0..1
    const tx = dx * 0.08 * t;
    const ty = dy * 0.08 * t;
    const scale = 1 + 0.04 * t;

    setStyle({ transform: `translate(${tx}px, ${ty}px) scale(${scale})` });
  }, [mouse]);

  return (
    <a
      ref={ref}
      href={pill.href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className="
        relative inline-flex items-center gap-2 rounded-full px-6 py-3
        bg-gradient-to-br from-[#142a63] via-[#1b3474] to-[#223d8b]
        text-white font-extrabold tracking-wide
        ring-1 ring-white/20
        shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_10px_25px_rgba(0,0,0,.35)]
        transition-[transform,background,box-shadow] duration-150
        hover:bg-[#1d3b86] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_14px_30px_rgba(0,0,0,.45)]
      "
    >
      <span className="text-xl">{pill.icon}</span>
      <span className="underline decoration-white/40 underline-offset-2">
        {pill.text}
      </span>
    </a>
  );
}

