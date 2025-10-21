// src/components/ResourcesGrid.tsx
"use client";

import { useCallback, useMemo, useState } from "react";
import AdviceModal from "@/components/AdviceModal";
import { QUOTES } from "@/lib/quotes";

type ModalState = {
  open: boolean;
  title: string;
  content: React.ReactNode;
};

// Wikipedia URL helper: slug bo‘lsa to‘g‘ridan-to‘g‘ri, bo‘lmasa qidiruvga
const wikiUrl = (name: string, slug?: string) =>
  slug
    ? `https://en.wikipedia.org/wiki/${encodeURIComponent(slug)}`
    : `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
        name
      )}&go=Go`;

const Card = ({
  title,
  desc,
  icon,
  onClick,
}: {
  title: string;
  desc: string;
  icon: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="text-left rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition p-5 md:p-6 w-full shadow-sm hover:shadow-md"
  >
    <div className="flex items-center gap-2 text-white/80">
      <span className="text-xl">{icon}</span>
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </button>
);

export default function ResourcesGrid() {
  const [modal, setModal] = useState<ModalState>({
    open: false,
    title: "",
    content: null,
  });

  const close = () => setModal((m) => ({ ...m, open: false }));

  // Unique quote (localStorage’da koʻrilgan indekslar saqlanadi).
  const nextUniqueQuote = useCallback(() => {
    const KEY = "uh_seen_quotes";
    const seenRaw =
      typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
    const seen = new Set<number>(seenRaw ? JSON.parse(seenRaw) : []);
    const pool = QUOTES.map((_, i) => i).filter((i) => !seen.has(i));

    const pick =
      pool.length > 0
        ? pool[Math.floor(Math.random() * pool.length)]
        : Math.floor(Math.random() * QUOTES.length);

    // Faqat qolganlari borida qo‘shamiz — hammasi tugasa, qayta boshlaydi
    if (pool.length > 0) {
      seen.add(pick);
      localStorage.setItem(KEY, JSON.stringify(Array.from(seen)));
    }
    return QUOTES[pick];
  }, []);

  // Handlers
  const onAssignments = useCallback(() => {
    setModal({
      open: true,
      title: "Assignments — Quick Help",
      content: (
        <div className="space-y-3">
          <p>
            Vazifa bilan qiyinchilik bormi?{" "}
            <a
              href="https://t.me/UniHero_BOT"
              target="_blank"
              rel="noreferrer"
              className="underline font-medium"
            >
              bot orqali book
            </a>{" "}
            qiling: <b>fan</b>, <b>deadline</b> va qisqacha ta’rif yozing —
            mos mutaxassisga yo‘naltiramiz.
          </p>
          <ul className="list-disc pl-5 text-white/80">
            <li>Fayl/screenshot biriktirsangiz yanada tezlashadi.</li>
            <li>Talablar (format, so‘z soni, rubrika) aniq bo‘lsin.</li>
            <li>Erta so‘rang — ko‘proq vaqt = yaxshi natija.</li>
          </ul>
        </div>
      ),
    });
  }, []);

  const onExamPrep = useCallback(() => {
    setModal({
      open: true,
      title: "Exam Prep — Verified Materials",
      content: (
        <div className="space-y-3">
          <p>
            Eng <b>so‘nggi va ishonchli</b> materiallar uchun{" "}
            <a
              href="https://t.me/UniHero_admin"
              target="_blank"
              rel="noreferrer"
              className="underline font-medium"
            >
              @UniHero_admin
            </a>{" "}
            bilan bog‘laning. <b>kurs</b> va <b>imtihon sanasi</b>ni yozing —
            yangilangan konspektlar, formula sheet va past papers yuboramiz.
          </p>
          <p className="text-white/80">
            Shuningdek obuna bo‘ling →{" "}
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
  }, []);

  const onTime = useCallback(() => {
    setModal({
      open: true,
      title: "Time Management — Focus & Pomodoro",
      content: (
        <div className="space-y-3">
          <ul className="list-disc pl-5">
            <li>
              <b>3 MITs</b> — kuningizning 3 ta eng muhim vazifasini tanlang.
            </li>
            <li>
              <b>Pomodoro 25/5</b> — 25 daqiqa chuqur fokus + 5 daqiqa tanaffus.
              4 sikl → 15–30 daqiqa katta tanaffus.
            </li>
            <li>Bildirishnomalarni o‘chirib, chalg‘ituvchi narsalarni yoping.</li>
            <li>Vaqtni yozib boring; bloklar bo‘yicha o‘qing.</li>
          </ul>
          <p className="text-white/80">Oddiy taymer yetarli — muhim narsa izchillik.</p>
        </div>
      ),
    });
  }, []);

  const onMotivation = useCallback(() => {
    const q = nextUniqueQuote();
    setModal({
      open: true,
      title: "Motivation — Today’s Quote",
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
              title={`Open ${q.author} on Wikipedia`}
            >
              {q.author} ↗
            </a>
          </footer>
        </blockquote>
      ),
    });
  }, [nextUniqueQuote]);

  const grid = useMemo(
    () => (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Assignments"
          desc="Guides and templates for every subject."
          icon="📄"
          onClick={onAssignments}
        />
        <Card
          title="Exam Prep"
          desc="Summaries, formula sheets, and past papers."
          icon="🧮"
          onClick={onExamPrep}
        />
        <Card
          title="Time Management"
          desc="Planners, checklists, and focus methods."
          icon="🕒"
          onClick={onTime}
        />
        <Card
          title="Motivation"
          desc="Daily quotes and student success stories."
          icon="💭"
          onClick={onMotivation}
        />
      </div>
    ),
    [onAssignments, onExamPrep, onTime, onMotivation]
  );

  return (
    <>
      {grid}
      <AdviceModal open={modal.open} title={modal.title} onClose={close}>
        {modal.content}
      </AdviceModal>
    </>
  );
}
