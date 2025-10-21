// src/components/ResourcesGrid.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import AdviceModal from "@/components/AdviceModal";

type CardDef = { title: string; desc: string; icon: string; onOpen: () => void };

export default function ResourcesGrid() {
  // modal
  const [modal, setModal] = useState<{ open: boolean; title: string; content: JSX.Element | null; }>({
    open: false, title: "", content: null,
  });

  const close = () => setModal((m) => ({ ...m, open: false }));

  // handlers (English + tips)
  const onAssignments = useCallback(() => {
    setModal({
      open: true,
      title: "Assignments — Quick Help 📚",
      content: (
        <div className="space-y-3">
          <p>
            Stuck on an assignment? You can{" "}
            <a href="https://t.me/UniHero_BOT" target="_blank" rel="noreferrer" className="underline font-medium">
              book help via our Telegram bot
            </a>{" "}
            🤖. Send the <b>subject</b>, <b>deadline</b>, and a short description — we’ll route it to the right person.
          </p>
          <ul className="list-disc pl-5 text-white/85">
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
      title: "Exam Prep — Verified Materials 🧮",
      content: (
        <div className="space-y-3">
          <p>
            For the <b>latest & trusted</b> materials, contact{" "}
            <a href="https://t.me/UniHero_admin" target="_blank" rel="noreferrer" className="underline font-medium">
              @UniHero_admin
            </a>
            . Share the <b>course</b> and <b>exam date</b>. We’ll send updated summaries, formula sheets and past papers.
          </p>
          <p className="text-white/80">Tip: follow <a className="underline" href="https://t.me/UniHero_news" target="_blank" rel="noreferrer">@UniHero_news</a>.</p>
        </div>
      ),
    });
  }, []);

  const onTime = useCallback(() => {
    setModal({
      open: true,
      title: "Time Management — Focus & Pomodoro ⏱️",
      content: (
        <div className="space-y-3">
          <ul className="list-disc pl-5">
            <li><b>3 MITs:</b> pick your 3 Most Important Tasks for the day.</li>
            <li><b>Pomodoro 25/5:</b> 25 min deep focus + 5 min break. 4 cycles → 15–30 min longer break.</li>
            <li>Turn on DND and study in blocks by course/topic.</li>
          </ul>
          <p className="text-white/80">Any simple timer works — consistency beats intensity.</p>
        </div>
      ),
    });
  }, []);

  // simple quote pool (unique-ish per device)
  const QUOTES = [
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain", wiki: "Mark_Twain" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela", wiki: "Nelson_Mandela" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci", wiki: "Leonardo_da_Vinci" },
  ];

  const wikiUrl = (name: string, slug?: string) =>
    slug ? `https://en.wikipedia.org/wiki/${encodeURIComponent(slug)}`
         : `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(name)}&go=Go`;

  const onMotivation = useCallback(() => {
    const key = "uh_seen_quotes";
    const seenRaw = typeof window !== "undefined" ? localStorage.getItem(key) : null;
    const seen = new Set<number>(seenRaw ? JSON.parse(seenRaw) : []);
    const pool = QUOTES.map((_, i) => i).filter((i) => !seen.has(i));
    const idx = pool.length === 0
      ? Math.floor(Math.random() * QUOTES.length)
      : pool[Math.floor(Math.random() * pool.length)];
    if (pool.length > 0) {
      seen.add(idx);
      localStorage.setItem(key, JSON.stringify(Array.from(seen)));
    }
    const q = QUOTES[idx];

    setModal({
      open: true,
      title: "Motivation — Today’s Quote 💡",
      content: (
        <blockquote className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
          <p className="text-[15px] leading-relaxed">“{q.text}”</p>
          <footer className="mt-2 text-sm text-white/70">
            —{" "}
            <a href={wikiUrl(q.author, q.wiki)} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              {q.author} ↗
            </a>
          </footer>
        </blockquote>
      ),
    });
  }, []);

  // cards (rotate every 20s clockwise)
  const [order, setOrder] = useState<number[]>([0, 1, 2, 3]);
  useEffect(() => {
    const t = setInterval(() => {
      setOrder((prev) => {
        const copy = [...prev];
        copy.unshift(copy.pop()!); // clockwise
        return copy;
      });
    }, 20000);
    return () => clearInterval(t);
  }, []);

  const CARDS: CardDef[] = [
    { title: "Assignments", desc: "Guides and templates for every subject.", icon: "📄", onOpen: onAssignments },
    { title: "Exam Prep", desc: "Summaries, formula sheets, and past papers.", icon: "🧮", onOpen: onExamPrep },
    { title: "Time Management", desc: "Planners, checklists, and focus methods.", icon: "🕒", onOpen: onTime },
    { title: "Motivation", desc: "Daily quotes and student success stories.", icon: "💭", onOpen: onMotivation },
  ];

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {order.map((idx) => {
          const c = CARDS[idx];
          return (
            <button
              key={c.title}
              onClick={c.onOpen}
              className="text-left rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition p-5 md:p-6 w-full shadow-sm hover:shadow-md relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-white/10" />
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-xl">{c.icon}</span>
                <h3 className="font-semibold">{c.title}</h3>
              </div>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
            </button>
          );
        })}
      </div>

      <AdviceModal open={modal.open} title={modal.title} onClose={close}>
        {modal.content}
      </AdviceModal>
    </>
  );
}
