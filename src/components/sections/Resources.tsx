"use client";

import React, { useMemo, useState } from "react";

type ModalKey = null | "assign" | "exam" | "motivation" | "guides" | "hub" | "podcasts";

const PODCASTS = [
  "https://www.youtube.com/c/aliabdaal",
  "https://www.youtube.com/c/ThomasFrank",
  "https://www.youtube.com/c/MattDAvella",
  "https://www.youtube.com/c/timferriss",
  "https://www.youtube.com/playlist?list=PLEITKg6BYjonkVKAPYaHMMa4-4ZU-EEYs&utm_source=chatgpt.com",
  "https://www.youtube.com/c/HurrySlowly",
  "https://www.youtube.com/c/MarieForleo",
  "https://www.youtube.com/playlist?list=PL27GCkYOrUzvoENAkd1MfXG2NnkdbIJMq&utm_source=chatgpt.com",
  "https://www.youtube.com/c/CalNewportDeepQuestions",
  "https://www.youtube.com/c/BeforeBreakfast",
];

const QUOTES = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Discipline is choosing what you want most over what you want now.",
  "Success is the sum of small efforts repeated day in and day out. — R. Collier",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "It always seems impossible until it’s done. — Nelson Mandela",
  "Focus on progress, not perfection.",
  "Dream big. Start small. Act now.",
  "Your future is created by what you do today, not tomorrow.",
  "If it matters to you, you’ll find a way.",
  "Action is the foundational key to all success. — Pablo Picasso",
];

const sampleOne = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
const open = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

function Pill({
  label,
  icon,
  onClick,
  align = "left",
}: {
  label: string;
  icon: string;
  onClick: () => void;
  align?: "left" | "right";
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "w-full max-w-[520px] rounded-full",
        "bg-white/10 border border-white/10 text-white",
        "px-5 py-3 text-lg font-semibold",
        "shadow-[0_6px_24px_rgba(1,28,64,.25)]",
        "hover:bg-white/[.14] transition-colors",
        align === "right" ? "ml-auto" : "mr-auto",
        "flex items-center gap-3 justify-between",
      ].join(" ")}
    >
      {align === "right" ? (
        <>
          <span className="opacity-90">{label}</span>
          <span className="text-xl leading-none">{icon}</span>
        </>
      ) : (
        <>
          <span className="text-xl leading-none">{icon}</span>
          <span className="opacity-90">{label}</span>
        </>
      )}
    </button>
  );
}

export default function ResourcesSection() {
  const [modal, setModal] = useState<ModalKey>(null);
  const randomQuote = useMemo(() => sampleOne(QUOTES), [modal]);
  const randomPodcast = useMemo(() => sampleOne(PODCASTS), [modal]);

  return (
    <section id="resources" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">Resources</h2>
      <p className="mt-1 text-white/80">
        Assignments, exam prep, study guides, hub va podcasts — hammasi bir joyda.
      </p>

      {/* 2 ustun */}
      <div className="relative mt-10 grid gap-8 md:grid-cols-2">
        <div className="space-y-7">
          <Pill label="Assignments" icon="🗂️" onClick={() => setModal("assign")} align="left" />
          <Pill label="Motivation" icon="🚀" onClick={() => setModal("motivation")} align="left" />
          <Pill label="UniHero Hub" icon="📣" onClick={() => setModal("hub")} align="left" />
        </div>

        <div className="space-y-7">
          <Pill label="Exam Prep" icon="📝" onClick={() => setModal("exam")} align="right" />
          <Pill label="Study Guides" icon="📖" onClick={() => setModal("guides")} align="right" />
          <Pill label="Study Podcasts" icon="🎧" onClick={() => setModal("podcasts")} align="right" />
        </div>

        {/* markazdagi katta logo halqasi */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <div
            className="grid place-items-center rounded-full"
            style={{
              width: 280,
              height: 280,
              border: "12px solid rgba(255,255,255,.7)",
              boxShadow: "0 15px 40px rgba(1,28,64,.35)",
              background: "radial-gradient(300px 220px at 50% 30%, rgba(255,255,255,.05), transparent)",
            }}
          >
            <img src="/brand/logo-light.png" alt="UniHero" className="h-32 w-32 opacity-95" />
          </div>
        </div>
      </div>

      {/* MODALLAR */}
      {modal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setModal(null)}>
          {/* Assignments */}
          {modal === "assign" && (
            <div className="uh-card w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3 text-2xl font-extrabold"><span>🗂️</span> <span>Assignments</span></div>
              <p className="mt-3 text-white/85">Buyurtma qilish uchun UniHero BOT’ga o‘ting.</p>
              <div className="mt-6">
                <a className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-lg font-semibold hover:bg-white/20" href="https://t.me/UniHero_BOT?start=assignments" target="_blank">Order</a>
              </div>
            </div>
          )}

          {/* Exam Prep */}
          {modal === "exam" && (
            <div className="uh-card w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3 text-2xl font-extrabold"><span>📝</span> <span>Exam Prep</span></div>
              <p className="mt-3 text-white/85">Barcha exam resourcelarni UniHero BOT’dan olishingiz mumkin.</p>
              <div className="mt-6">
                <a className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-lg font-semibold hover:bg-white/20" href="https://t.me/UniHero_BOT?start=exam_prep" target="_blank">Join!</a>
              </div>
            </div>
          )}

          {/* Motivation */}
          {modal === "motivation" && (
            <div className="uh-card w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3 text-2xl font-extrabold"><span>💬</span> <span>Motivation</span> <span className="ml-1">🚀</span></div>
              <blockquote className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5 text-lg leading-relaxed">{randomQuote}</blockquote>
            </div>
          )}

          {/* Study Guides */}
          {modal === "guides" && (
            <div className="uh-card w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3 text-2xl font-extrabold"><span>📖</span> <span>Study Guides</span></div>
              <p className="mt-3 text-white/85">Universitet study guide’larini bot orqali oling.</p>
              <div className="mt-6">
                <a className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-lg font-semibold hover:bg-white/20" href="https://t.me/UniHero_BOT?start=study_guides" target="_blank">Download</a>
              </div>
            </div>
          )}

          {/* UniHero Hub */}
          {modal === "hub" && (
            <div className="uh-card w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3 text-2xl font-extrabold"><span>📣</span> <span>UniHero Hub</span></div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 rounded-full bg-white/12 px-5 py-2.5 text-base font-semibold hover:bg-white/20" href="https://t.me/UniHero_news" target="_blank">📣 UniHero_News</a>
                <a className="inline-flex items-center gap-2 rounded-full bg-white/12 px-5 py-2.5 text-base font-semibold hover:bg-white/20" href="https://t.me/UniHero_BOT" target="_blank">🤖 UniHero BOT</a>
                <a className="inline-flex items-center gap-2 rounded-full bg-white/12 px-5 py-2.5 text-base font-semibold hover:bg-white/20" href="https://t.me/Unihero_admin" target="_blank">👨🏻‍💻 Admin</a>
              </div>
            </div>
          )}

          {/* Study Podcasts */}
          {modal === "podcasts" && (
            <div className="uh-card w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3 text-2xl font-extrabold"><span>🎧</span> <span>Study Podcasts</span></div>
              <p className="mt-3 text-white/85">“Start learn” ni bosing — ro‘yxatdan tasodifiy kanal/playlist ochiladi.</p>
              <div className="mt-6">
                <button className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-lg font-semibold hover:bg-white/20" onClick={() => open(randomPodcast)}>Start learn</button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
