"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  img: string;      // public/… ga nisbiy path
  emoji: string;
  date: string;
  title: string;
};

const SLIDES: Slide[] = [
  { img: "/images/1-unihero-bot-created.png", emoji: "🤖", date: "2024 · Dec", title: "UniHero Bot created" },
  { img: "/images/2-anonym-founders.png",     emoji: "🧑‍🤝‍🧑", date: "2024 · Oct", title: "2 anonym founders" },
  { img: "/images/3-ai-detectors.png",        emoji: "🧠", date: "2025 · Mar", title: "Focused more on AI detectors and others" },
  { img: "/images/4-180-students.png",        emoji: "🎉", date: "2025 · May", title: "180+ students success" },
  { img: "/images/5-bot-200-users.png",       emoji: "📥", date: "2025 · June", title: "UniHero Bot 200+ users" },
];

const AUTOPLAY_MS = 5000; // 5s

export default function TimelineCarousel() {
  // infinite loop uchun bosh/oxiriga mirror slidelar qo‘shamiz
  const looped = useMemo(
    () => [SLIDES[SLIDES.length - 1], ...SLIDES, SLIDES[0]],
    []
  );

  const [index, setIndex] = useState(1); // markazdagi (visible) slide cursor (looped massividagi)
  const railRef = useRef<HTMLDivElement>(null);

  // Drag / swipe
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    // element width (kartochka + gap) hisoblab har “index” o‘rniga smooth scroll qilamiz
    const go = (i: number, smooth = true) => {
      const cards = rail.querySelectorAll<HTMLElement>("[data-card]");
      if (!cards.length) return;
      const w = cards[0].offsetWidth + 16; // gap-4 ~= 16px
      rail.scrollTo({ left: w * (i - 1), behavior: smooth ? "smooth" : "auto" });
    };

    go(index, true);

    // infinite: scroll tugaganda chetga yetganda markazga “sakratish”
    const onScrollEnd = () => {
      // 0 -> oxirgi
      if (index === 0) {
        setIndex(looped.length - 2);
        go(looped.length - 2, false);
      }
      // eng oxirgi -> 1
      if (index === looped.length - 1) {
        setIndex(1);
        go(1, false);
      }
    };

    const t = setTimeout(onScrollEnd, 400); // smooth yakunlangandan sal keyin tekshirish
    return () => clearTimeout(t);
  }, [index, looped.length]);

  // Autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  // Drag handlers
  const onDown = (clientX: number) => {
    const rail = railRef.current!;
    drag.current = { active: true, startX: clientX, startScroll: rail.scrollLeft };
  };
  const onMove = (clientX: number) => {
    if (!drag.current.active) return;
    const rail = railRef.current!;
    const dx = clientX - drag.current.startX;
    rail.scrollLeft = drag.current.startScroll - dx;
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
    const w = cards[0].offsetWidth + 16;
    const approx = Math.round(rail.scrollLeft / w) + 1; // +1 chunki 1-chi ko‘rinishi markaz
    setIndex(approx);
  };

  const leftSlide = looped[index - 1];
  const centerSlide = looped[index];
  const rightSlide = looped[index + 1];

  return (
    <div className="relative">
      {/* Rail */}
      <div
        ref={railRef}
        className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth px-2 py-6 select-none"
        onMouseDown={(e) => onDown(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseLeave={onUp}
        onMouseUp={onUp}
        onTouchStart={(e) => onDown(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={onUp}
      >
        {looped.map((s, i) => {
          // markazdagi karta i === index
          const isCenter = i === index;
          const isSide = i === index - 1 || i === index + 1;

          return (
            <Card
              key={`${s.title}-${i}`}
              slide={s}
              data-card
              className={[
                "transition-all duration-300 ease-out",
                "rounded-3xl ring-1 ring-white/10 bg-white/5 shadow-[0_14px_40px_rgba(0,0,0,.35)]",
                "min-w-[320px] md:min-w-[520px] xl:min-w-[640px] h-[240px] md:h-[300px] xl:h-[340px]",
                isCenter ? "scale-[1.0]" : "scale-[0.92]",
                isSide ? "opacity-90 blur-[1px]" : isCenter ? "opacity-100" : "opacity-60 blur-[2px]",
              ].join(" ")}
              onClick={() => setIndex(i)}
            />
          );
        })}
      </div>

      {/* Caption for center slide */}
      {centerSlide && (
        <div className="mt-6 text-center">
          <div className="text-2xl md:text-3xl font-semibold">
            <span className="mr-2">{centerSlide.emoji}</span>
            {centerSlide.title}
          </div>
          <div className="text-white/70 mt-1">{centerSlide.date}</div>
          <div className="mx-auto mt-3 h-[2px] w-4/5 max-w-md rounded-full bg-white/30" />
      </div>
      )}

      {/* Prev / Next buttons (optional) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 md:pl-3">
        <button
          aria-label="Prev"
          className="pointer-events-auto rounded-full bg-white/10 p-2 ring-1 ring-white/20 hover:bg-white/15 transition"
          onClick={() => setIndex((i) => i - 1)}
        >
          ◀
        </button>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 md:pr-3">
        <button
          aria-label="Next"
          className="pointer-events-auto rounded-full bg-white/10 p-2 ring-1 ring-white/20 hover:bg-white/15 transition"
          onClick={() => setIndex((i) => i + 1)}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

function Card({
  slide,
  className,
  onClick,
  ...rest
}: { slide: Slide; className?: string; onClick?: () => void } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} onClick={onClick} {...rest}>
      <div className="relative h-full w-full overflow-hidden rounded-3xl">
        {/* background image */}
        <Image
          src={slide.img}
          alt={slide.title}
          fill
          sizes="(max-width: 768px) 320px, (max-width: 1280px) 520px, 640px"
          className="object-cover"
          priority={false}
        />
        {/* gradient overlay for readability */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-black/35 via-black/15 to-transparent" />
        {/* small label in card */}
        <div className="absolute bottom-3 left-4">
          <div className="rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15 backdrop-blur">
            <span className="mr-1">{slide.emoji}</span>
            {slide.date}
          </div>
          <div className="mt-1 text-lg font-semibold drop-shadow">
            {slide.title}
          </div>
        </div>
      </div>
    </div>
  );
}

