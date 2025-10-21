// src/components/ResourcesGrid.tsx
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AdviceModal from "@/components/AdviceModal";

/** ---- Small building blocks ---- */

type ModalState = {
  open: boolean;
  title: string;
  content: React.ReactNode | null;
};

const Card = ({
  title,
  desc,
  icon,
  onClick,
  className = "",
  style,
}: {
  title: string;
  desc: string;
  icon: string;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <button
    onClick={onClick}
    style={style}
    className={
      "text-left rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition p-5 md:p-6 w-[280px] md:w-[320px] shadow-sm hover:shadow-md absolute" +
      " " +
      className
    }
  >
    <div className="flex items-center gap-2 text-white/85">
      <span className="text-xl">{icon}</span>
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </button>
);

/** ---- Modal contents (same ideas as before, concise EN) ---- */

const openAssignments = (setModal: (s: ModalState) => void) =>
  setModal({
    open: true,
    title: "Assignments — Quick Help 📚",
    content: (
      <div className="space-y-3">
        <p>
          Stuck on an assignment? You can{" "}
          <a
            href="https://t.me/UniHero_BOT"
            target="_blank"
            rel="noreferrer"
            className="underline font-medium"
          >
            book help via our Telegram bot
          </a>
          . Send the <b>subject</b>, <b>deadline</b>, and a short description —
          we’ll route it to the right person.
        </p>
        <ul className="list-disc pl-5 text-white/80">
          <li>Attach files/screenshots if possible.</li>
          <li>Be clear about constraints (format, word count, rubric).</li>
          <li>Ask early — more time = better results.</li>
        </ul>
      </div>
    ),
  });

const openExamPrep = (setModal: (s: ModalState) => void) =>
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
          Also follow →{" "}
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

const openTime = (setModal: (s: ModalState) => void) =>
  setModal({
    open: true,
    title: "Time Management — Focus & Pomodoro ⏱️",
    content: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 leading-7">
          <li>
            <b>3 MITs</b>: pick your 3 Most Important Tasks for the day.
          </li>
          <li>
            <b>Pomodoro 25/5</b>: 25 min deep focus + 5 min break. 4 cycles →
            15–30 min long break.
          </li>
          <li>Turn on DND; remove distractions.</li>
          <li>Study in blocks; track your time.</li>
        </ul>
        <p className="text-white/80">Simple timer is enough. Consistency wins.</p>
      </div>
    ),
  });

const openMotivation = (setModal: (s: ModalState) => void) =>
  setModal({
    open: true,
    title: "Motivation — Daily Quote ✨",
    content: (
      <blockquote className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <p className="text-[15px] leading-relaxed">
          “Success is the sum of small efforts, repeated day in and day out.”
        </p>
        <footer className="mt-2 text-sm text-white/70">— Robert Collier</footer>
      </blockquote>
    ),
  });

/** ---- Main rotating diamond grid ---- */

export default function ResourcesGrid() {
  const [modal, setModal] = useState<ModalState>({
    open: false,
    title: "",
    content: null,
  });

  const close = useCallback(() => setModal((m) => ({ ...m, open: false })), []);

  // Cards definition
  const CARDS = useMemo(
    () => [
      {
        title: "Assignments",
        desc: "Guides and templates for every subject.",
        icon: "📄",
        onClick: () => openAssignments(setModal),
      },
      {
        title: "Exam Prep",
        desc: "Summaries, formula sheets, and past papers.",
        icon: "🧮",
        onClick: () => openExamPrep(setModal),
      },
      {
        title: "Time Management",
        desc: "Planners, checklists, and focus methods.",
        icon: "🕒",
        onClick: () => openTime(setModal),
      },
      {
        title: "Motivation",
        desc: "Daily quotes and student success stories.",
        icon: "💭",
        onClick: () => openMotivation(setModal),
      },
    ],
    []
  );

  // positions in diamond layout (top, right, bottom, left)
  const POS = [
    { top: "8%", left: "50%" },   // top
    { top: "50%", left: "85%" },  // right
    { top: "88%", left: "50%" },  // bottom
    { top: "50%", left: "15%" },  // left
  ] as const;

  // which card goes to which position (rotates clockwise)
  const [offset, setOffset] = useState(0);
  const hovering = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // rotate every 20s (pause on hover)
  useEffect(() => {
    if (hovering.current) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setOffset((o) => (o + 1) % 4);
    }, 20000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [offset]);

  const goCW = () => setOffset((o) => (o + 1) % 4);
  const goCCW = () => setOffset((o) => (o + 3) % 4);

  return (
    <>
      {/* Desktop diamond */}
      <div
        className="relative hidden md:block h-[560px] w-full rounded-3xl border border-white/10 ring-1 ring-white/10"
        onMouseEnter={() => {
          hovering.current = true;
          if (timerRef.current) clearInterval(timerRef.current);
        }}
        onMouseLeave={() => {
          hovering.current = false;
          timerRef.current = setInterval(() => {
            setOffset((o) => (o + 1) % 4);
          }, 20000);
        }}
      >
        {CARDS.map((c, idx) => {
          // which position this card should occupy
          const pos = POS[(idx + offset) % 4];

          // slight scale for perceived depth (top/bottom = 1, left/right = 0.98)
          const scale =
            (idx + offset) % 4 === 1 || (idx + offset) % 4 === 3
              ? "scale-[0.98]"
              : "scale-100";

        return (
            <Card
              key={idx}
              {...c}
              onClick={c.onClick}
              style={{
                top: pos.top,
                left: pos.left,
                transform: "translate(-50%, -50%)",
                transition:
                  "top .6s cubic-bezier(.2,.8,.2,1), left .6s cubic-bezier(.2,.8,.2,1), transform .6s",
              }}
              className={`-translate-x-1/2 -translate-y-1/2 ${scale}`}
            />
          );
        })}

        {/* arrows (optional) */}
        <button
          aria-label="Prev"
          onClick={goCCW}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={goCW}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mobile fallback: simple grid */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {CARDS.map((c, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5"
            onClick={c.onClick}
          >
            <div className="flex items-center gap-2 text-white/85">
              <span className="text-xl">{c.icon}</span>
              <h3 className="font-semibold">{c.title}</h3>
            </div>
            <p className="mt-2 text-sm text-white/70">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AdviceModal open={modal.open} title={modal.title} onClose={close}>
        {modal.content}
      </AdviceModal>
    </>
  );
}
