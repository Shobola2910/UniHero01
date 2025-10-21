// src/components/ResourcesGrid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* A tiny local modal that closes on backdrop click or ESC             */
/* ------------------------------------------------------------------ */
function Modal({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose} // click on the backdrop closes
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-[#0c1c3d]/95 p-5 shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/90 ring-1 ring-white/20 transition hover:bg-white/20"
        >
          ✕
        </button>
        <h3 className="mb-3 text-lg font-semibold">{title}</h3>
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

type Card = {
  key: string;
  icon: string;
  title: string;
  desc: string;
  onOpen: () => void;
};

export default function ResourcesGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState<React.ReactNode>(null);

  const openModal = useCallback((title: string, body: React.ReactNode) => {
    setModalTitle(title);
    setModalBody(body);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  // Declare the 4 cards once, with handlers that open the modal
  const initialCards: Card[] = useMemo(
    () => [
      {
        key: "assignments",
        icon: "📄",
        title: "Assignments",
        desc: "Guides and templates for every subject.",
        onOpen: () =>
          openModal(
            "Assignments — Quick Help 📚",
            <>
              <p>
                Stuck on an assignment? You can{" "}
                <Link
                  href="https://t.me/UniHero_BOT"
                  target="_blank"
                  className="underline font-medium"
                >
                  book help via our Telegram bot
                </Link>
                . Send the <b>subject</b>, <b>deadline</b> and a short description — we&apos;ll route it to the right person.
              </p>
              <ul>
                <li>Attach files/screenshots if possible.</li>
                <li>Be clear about constraints (format, word count, rubric).</li>
                <li>Ask early — more time = better results.</li>
              </ul>
            </>
          ),
      },
      {
        key: "exam",
        icon: "🧮",
        title: "Exam Prep",
        desc: "Summaries, formula sheets, and past papers.",
        onOpen: () =>
          openModal(
            "Exam Prep — Verified Materials ✅",
            <>
              <p>
                For the latest & trusted materials, contact{" "}
                <Link
                  href="https://t.me/UniHero_admin"
                  target="_blank"
                  className="underline font-medium"
                >
                  @UniHero_admin
                </Link>
                . Share your <b>course</b> and <b>exam date</b>. We’ll send updated summaries, formula sheets and past papers.
              </p>
              <p>
                Tip: follow{" "}
                <Link href="https://t.me/UniHero_news" target="_blank" className="underline">
                  @UniHero_news
                </Link>{" "}
                for drops.
              </p>
            </>
          ),
      },
      {
        key: "time",
        icon: "🕒",
        title: "Time Management",
        desc: "Planners, checklists, and focus methods.",
        onOpen: () =>
          openModal(
            "Time Management — Focus & Pomodoro ⏱️",
            <>
              <ul>
                <li>
                  <b>3 MITs</b>: pick your 3 Most Important Tasks for the day.
                </li>
                <li>
                  <b>Pomodoro 25/5</b>: 25 minutes deep focus + 5 minutes break. 4 cycles → longer break.
                </li>
                <li>Turn on DND; study in blocks by course/topic.</li>
              </ul>
            </>
          ),
      },
      {
        key: "motivation",
        icon: "💭",
        title: "Motivation",
        desc: "Daily quotes and student success stories.",
        onOpen: () =>
          openModal(
            "Motivation — Little Boost ✨",
            <>
              <p>
                Keep going — consistent, small wins stack up faster than you think. When stuck, write the next <b>one sentence</b>.
              </p>
            </>
          ),
      },
    ],
    [openModal]
  );

  // we keep a stateful copy to rotate
  const [cards, setCards] = useState<Card[]>(initialCards);

  // rotate clockwise every 20 seconds (left → center → right → bottom → left …)
  useEffect(() => {
    const t = setInterval(() => {
      setCards((prev) => {
        const copy = [...prev];
        // move last item to the front (clockwise look)
        copy.unshift(copy.pop()!);
        return copy;
      });
    }, 20000);
    return () => clearInterval(t);
  }, []);

  // Layout positions: we render in 2x2 with nicer spacing & inner frame
  const grid = (
    <div className="grid gap-8 md:grid-cols-2">
      {cards.map((c) => (
        <button
          key={c.key}
          onClick={c.onOpen}
          className="group relative w-full rounded-2xl bg-white/6 p-5 text-left shadow-lg ring-1 ring-white/10 transition-all hover:translate-y-[-2px] hover:bg-white/[0.10] hover:ring-white/20"
        >
          {/* soft inner frame */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10"></div>

          <div className="flex items-center gap-3">
            <span className="text-xl">{c.icon}</span>
            <h3 className="text-base font-semibold">{c.title}</h3>
          </div>
          <p className="mt-2 text-sm text-white/80">{c.desc}</p>
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* container with subtle frame and tighter padding to avoid clipping */}
      <div className="rounded-3xl border border-white/10 p-5 ring-1 ring-white/10">
        {grid}
      </div>

      <Modal open={modalOpen} title={modalTitle} onClose={closeModal}>
        {modalBody}
      </Modal>
    </>
  );
}
