// src/components/ResourcesGrid.tsx
"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import AdviceModal from "@/components/AdviceModal";
import { QUOTES } from "@/lib/quotes";

/* ---------- Modal holati tipi ---------- */
type ModalState = {
  open: boolean;
  title: string;
  content: React.ReactNode | null;
};

type CardItem = {
  key: "assign" | "exam" | "time" | "motive";
  title: string;
  desc: string;
  icon: string;
};

/* ---------- Rotatsiya qilinadigan to‘rt karta ---------- */
const BASE_CARDS: CardItem[] = [
  {
    key: "assign",
    title: "Assignments",
    desc: "Guides and templates for every subject.",
    icon: "📄",
  },
  {
    key: "exam",
    title: "Exam Prep",
    desc: "Summaries, formula sheets, and past papers.",
    icon: "🧮",
  },
  {
    key: "time",
    title: "Time Management",
    desc: "Planners, checklists, and focus methods.",
    icon: "🕒",
  },
  {
    key: "motive",
    title: "Motivation",
    desc: "Daily quotes and student success stories.",
    icon: "💭",
  },
];

/* ---------- Wiki havolasi ---------- */
const wikiUrl = (name: string, slug?: string) =>
  slug
    ? `https://en.wikipedia.org/wiki/${encodeURIComponent(slug)}`
    : `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
        name
      )}&go=Go`;

export default function ResourcesGrid() {
  /* ---- Rotatsiya (har 20 soniyada) ---- */
  const [orderStart, setOrderStart] = useState(0); // qaysi kartadan boshlash
  const rotate = useCallback(
    () => setOrderStart((s) => (s + 1) % BASE_CARDS.length),
    []
  );

  useEffect(() => {
    const id = setInterval(rotate, 20000); // 20s da bir marta
    return () => clearInterval(id);
  }, [rotate]);

  /* ---- Ko‘rinish tartibi (soat yo‘nalishi) ---- */
  const cards = useMemo<CardItem[]>(
    () =>
      Array.from({ length: BASE_CARDS.length }, (_, i) => {
        const idx = (orderStart + i) % BASE_CARDS.length;
        return BASE_CARDS[idx];
      }),
    [orderStart]
  );

  /* ---- Modal ---- */
  const [modal, setModal] = useState<ModalState>({
    open: false,
    title: "",
    content: null,
  });
  const close = useCallback(() => setModal((m) => ({ ...m, open: false })), []);

  // Escape bilan yopish
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  // Unique quote (takrorlanmasiga harakat)
  const nextUniqueQuote = useCallback(() => {
    const key = "uh_seen_quotes";
    const raw = typeof window !== "undefined" ? localStorage.getItem(key) : null;
    const seen = new Set<number>(raw ? JSON.parse(raw) : []);
    const pool = QUOTES.map((_, i) => i).filter((i) => !seen.has(i));

    const idx =
      pool.length === 0
        ? Math.floor(Math.random() * QUOTES.length)
        : pool[Math.floor(Math.random() * pool.length)];

    if (pool.length > 0) {
      seen.add(idx);
      localStorage.setItem(key, JSON.stringify(Array.from(seen)));
    }
    return QUOTES[idx];
  }, []);

  /* ---- Karta bosilgandagi maslahatlar ---- */
  const onOpen = useCallback((k: CardItem["key"]) => {
    if (k === "assign") {
      setModal({
        open: true,
        title: "Assignments — Quick Help 📚",
        content: (
          <div className="space-y-3">
            <p>
              Having trouble with an assignment? You can{" "}
              <a
                href="https://t.me/UniHero_BOT"
                target="_blank"
                rel="noreferrer"
                className="underline font-medium"
              >
                book help via our Telegram bot
              </a>
              . Send the <b>subject</b>, <b>deadline</b>, and a short
              description — we’ll route it to the right person.
            </p>
            <ul className="list-disc pl-5 text-white/80">
              <li>Attach files/screenshots if possible.</li>
              <li>Be clear about constraints (format, word count, rubric).</li>
              <li>Ask early — more time = better results.</li>
            </ul>
          </div>
        ),
      });
    } else if (k === "exam") {
      setModal({
        open: true,
        title: "Exam Prep — Verified Materials 🧠",
        content: (
          <div className="space-y-3">
            <p>
              For the <b>latest & trusted</b> materials, contact{" "}
              <a
                href="https://t.me/UniHero_admin"
                target="_blank"
                rel="noreferrer"
                className="underline font-medium"
              >
                @UniHero_admin
              </a>
              . Share the <b>course</b> and <b>exam date</b>. We’ll send updated
              summaries, formula sheets and past papers.
            </p>
            <p className="text-white/80">
              Tip: also follow →{" "}
              <a
                href="https://t.me/UniHero_news"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                @UniHero_news
              </a>
              .
            </p>
          </div>
        ),
      });
    } else if (k === "time") {
      setModal({
        open: true,
        title: "Time Management — Focus & Pomodoro ⏱️",
        content: (
          <div className="space-y-3">
            <ul className="list-disc pl-5">
              <li>
                <b>3 MITs:</b> pick your 3 Most Important Tasks for the day.
              </li>
              <li>
                <b>Pomodoro 25/5:</b> 25 min deep focus + 5 min break. After 4
                cycles → longer rest.
              </li>
              <li>Turn off notifications (DND) and study in blocks.</li>
            </ul>
            <p className="text-white/80">
              Tools: any simple timer is enough. Consistency beats intensity.
            </p>
          </div>
        ),
      });
    } else {
      const q = nextUniqueQuote();
      setModal({
        open: true,
        title: "Motivation — Today’s Quote 💡",
        content: (
          <blockquote className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <p className="text-[15px] leading-relaxed">“{q.text}”</p>
            <footer className="mt-2 text-sm text-white/70">
              —{" "}
              <a
                href={wikiUrl(q.author, q.wiki)}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
                title={`Read about ${q.author} on Wikipedia`}
              >
                {q.author} ↗
              </a>
            </footer>
          </blockquote>
        ),
      });
    }
  }, [nextUniqueQuote]);

  /* ---- Karta komponenti ---- */
  const Card = ({
    item,
    onClick,
  }: {
    item: CardItem;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className="
        group text-left w-full
        rounded-2xl bg-white/[0.06] hover:bg-white/[0.08]
        ring-1 ring-white/10 hover:ring-white/20
        transition-all shadow-sm hover:shadow
        px-5 py-4 md:px-6 md:py-5
        "
    >
      <div className="flex items-center gap-2">
        <span className="text-xl">{item.icon}</span>
        <h3 className="font-semibold text-[16px] md:text-[17px]">
          {item.title}
        </h3>
      </div>

      {/* yozuv kesilmasin, balandlik bir xil tursin */}
      <p
        className="
          mt-2 text-[13.5px] md:text-sm text-white/80
          whitespace-normal break-words hyphens-auto leading-snug
          min-h-[44px] md:min-h-[48px]
        "
      >
        {item.desc}
      </p>

      {/* ichki kichik ramka effekt */}
      <div className="pointer-events-none mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <p className="text-xs text-white/60">
          Click for tips & quick actions →
        </p>
      </div>
    </button>
  );

  /* ---- Grid (markazga yaqin, oralari ixcham, joylar almashadi) ---- */
  return (
    <>
      <div
        className="
          grid gap-4 md:gap-6
          grid-cols-1 sm:grid-cols-2
          xl:grid-cols-2
          place-items-center
        "
      >
        {cards.map((c) => (
          <div key={c.key} className="w-full max-w-[520px]">
            <Card item={c} onClick={() => onOpen(c.key)} />
          </div>
        ))}
      </div>

      {/* Modal — fonni bosib ham yopiladi */}
      <AdviceModal open={modal.open} title={modal.title} onClose={close}>
        {/* fonni bosishni ushlash: komponent ichida overlay bor bo‘lsa, 
            u ustida onClick bilan close() chaqiriladi. 
            Agar sizning AdviceModal’da bo‘lmasa, yuqorida qo‘shgan Escape ishlaydi. */}
        {modal.content}
      </AdviceModal>
    </>
  );
}
