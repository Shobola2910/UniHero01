// src/components/ResourcesGrid.tsx
"use client";
import { useCallback, useMemo, useState } from "react";
import AdviceModal from "@/components/AdviceModal";
import { QUOTES } from "@/lib/quotes";

type ModalState = {
  open: boolean;
  title: string;
  content: JSX.Element | null;
};

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

  // ——— Unique quote picker with localStorage memory
  const nextUniqueQuote = useCallback(() => {
    const key = "uh_seen_quotes";
    const seenRaw = typeof window !== "undefined" ? localStorage.getItem(key) : null;
    const seen = new Set<number>(seenRaw ? JSON.parse(seenRaw) : []);

    const pool = QUOTES.map((_, i) => i).filter((i) => !seen.has(i));
    const idx =
      pool.length === 0
        ? Math.floor(Math.random() * QUOTES.length) // all seen → allow random
        : pool[Math.floor(Math.random() * pool.length)];

    if (pool.length > 0) {
      seen.add(idx);
      localStorage.setItem(key, JSON.stringify(Array.from(seen)));
    }
    return QUOTES[idx];
  }, []);

  // ——— Cards handlers
  const onAssignments = useCallback(() => {
    setModal({
      open: true,
      title: "Assignments — Quick Help",
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
            . Send the <b>subject</b>, <b>deadline</b>, and a short description of the problem — we’ll route it to the right person.
          </p>
          <ul className="list-disc pl-5 text-white/80">
            <li>Attach files/screenshots if possible.</li>
            <li>Be clear about constraints (format, word count, rubric).</li>
            <li>Ask early — more time = better results.</li>
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
            For the <b>latest & trusted</b> materials, contact{" "}
            <a
              href="https://t.me/UniHero_admin"
              target="_blank"
              rel="noreferrer"
              className="underline font-medium"
            >
              @UniHero_admin
            </a>
            . Share the <b>course</b> and <b>exam date</b>. We’ll send updated summaries, formula sheets and past papers.
          </p>
          <p className="text-white/80">
            Tip: also follow the news channel for fresh drops →{" "}
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
            <li><b>3 MITs</b>: pick your 3 Most Important Tasks for the day.</li>
            <li><b>Pomodoro 25/5</b>: 25 minutes deep focus + 5 minutes break. Do 4 cycles → take a longer 15–30 min break.</li>
            <li>Turn off notifications. Use “Do Not Disturb”.</li>
            <li>Study in blocks by course/topic. Track time you actually studied.</li>
          </ul>
          <p className="text-white/80">
            Tools: a physical timer or any simple mobile timer is enough. Consistency beats intensity.
          </p>
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
          <footer className="mt-2 text-sm text-white/70">— {q.author}</footer>
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

