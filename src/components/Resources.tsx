// src/components/Resources.tsx
"use client";

import { useMemo, useState } from "react";

type ModalKey = null | "assign" | "exam" | "motivation" | "guides" | "hub" | "podcasts";

/** —— 10 ta podcast link —— */
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

/** —— Motivation iqtiboslari (xohlasangiz kengaytiring) —— */
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
  "What we know is a drop, what we don’t know is an ocean. — Isaac Newton",
  "The secret of getting ahead is getting started. — Mark Twain",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "Stay hungry. Stay foolish. — Steve Jobs",
  "Small steps every day.",
  "Hard choices, easy life. Easy choices, hard life. — Jerzy Gregorek",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Success is not final; failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Quality is not an act, it is a habit. — Aristotle",
  "Work hard in silence, let success make the noise.",
];

/** —— Helperlar —— */
const sampleOne = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
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
        "px-6 py-4 text-xl font-semibold",
        "shadow-[0_6px_24px_rgba(1,28,64,.25)]",
        "hover:bg-white/[.14] transition-colors",
        align === "right" ? "ml-auto" : "mr-auto",
        "flex items-center gap-3 justify-between",
      ].join(" ")}
    >
      {align === "right" ? (
        <>
          <span className="opacity-90">{label}</span>
          <span className="text-2xl leading-none">{icon}</span>
        </>
      ) : (
        <>
          <span className="text-2xl leading-none">{icon}</span>
          <span className="opacity-90">{label}</span>
        </>
      )}
    </button>
  );
}

export default function Resources() {
  const [modal, setModal] = useState<ModalKey>(null);

  // modal har ochilganda yangilansin
  const randomQuote = useMemo(() => sampleOne(QUOTES), [modal]);
  const randomPodcast = useMemo(() => sampleOne(PODCASTS), [modal]);

  return (
    <section id="resources" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">Resources</h2>
      <p className="mt-1 text-white/80">
        Assignments, exam prep, study guides, hub va podcasts — hammasi bir joyda.
      </p>

      {/* —— 2 ustun / markazda logo halqasi —— */}
      <div className="relative mt-10 grid gap-8 md:grid-cols-2">
        {/* Chap ustun */}
        <div className="space-y-8">
          <Pill label="Assignments"    icon="🗂️" onClick={() => setModal("assign")}     align="left" />
          <Pill label="Motivation"     icon="🚀" onClick={() => setModal("motivation")}  align="left" />
          <Pill label="UniHero Hub"    icon="📣" onClick={() => setModal("hub")}        align="left" />
        </div>

        {/* O‘ng ustun */}
        <div className="space-y-8">
          <Pill label="Exam Prep"      icon="📝" onClick={() => setModal("exam")}        align="right" />
          <Pill label="Study Guides"   icon="📖" onClick={() => setModal("guides")}      align="right" />
          <Pill label="Study Podcasts" icon="🎧" onClick={() => setModal("podcasts")}    align="right" />
        </div>

        {/* Markaziy halqa (dekor) */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <div
            className="grid place-items-center rounded-full border-[10px] border-white/70 p-4"
            style={{ width: 220, height: 220 }}
          >
            {/* Agar rasm yo'q bo'lsa, shunchaki U harfi ko'rsin */}
            <img
              src="/brand/logo-light.png"
              alt="UniHero"
              className="h-28 w-28 opacity-95"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="text-5xl font-black">U</span>
          </div>
        </div>
      </div>

      {/* —— Modallar (blur fon) —— */}
      {modal && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setModal(null)}
        >
          {/* Assignments */}
          {modal === "assign" && (
            <div
              className="uh-card w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 text-2xl font-extrabold">
                <span>🗂️</span> <span>Assignments</span>
              </div>
              <p className="mt-3 text-white/80">
                Buyurtma qilish uchun UniHero BOT’ga o‘ting.
              </p>
              <div className="mt-6">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-lg font-semibold hover:bg-white/20"
                  href="https://t.me/UniHero_BOT?start=assignments"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order
                </a>
              </div>
            </div>
          )}

          {/* Exam Prep */}
          {modal === "exam" && (
            <div
              className="uh-card w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 text-2xl font-extrabold">
                <span>📝</span> <span>Exam Prep</span>
              </div>
              <p className="mt-3 text-white/80">
                Barcha exam resourcelarni UniHero BOT’dan olishingiz mumkin.
              </p>
              <div className="mt-6">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-lg font-semibold hover:bg-white/20"
                  href="https://t.me/UniHero_BOT?start=exam_prep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join!
                </a>
              </div>
            </div>
          )}

          {/* Motivation */}
          {modal === "motivation" && (
            <div
              className="uh-card w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 text-2xl font-extrabold">
                <span>💬</span> <span>Motivation</span> <span className="ml-1">🚀</span>
              </div>
              <blockquote className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5 text-lg leading-relaxed">
                {randomQuote}
              </blockquote>
              <p className="mt-3 text-sm text-white/70">
                * Ro‘yxatni <code>QUOTES</code> massiviga qo‘shib 500 tagacha kengaytirishingiz mumkin.
              </p>
            </div>
          )}

          {/* Study Guides */}
          {modal === "guides" && (
            <div
              className="uh-card w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 text-2xl font-extrabold">
                <span>📖</span> <span>Study Guides</span>
              </div>
              <p className="mt-3 text-white/80">
                Universitet study guide’larini bot orqali oling.
              </p>
              <div className="mt-6">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-lg font-semibold hover:bg-white/20"
                  href="https://t.me/UniHero_BOT?start=study_guides"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </div>
            </div>
          )}

          {/* UniHero Hub */}
          {modal === "hub" && (
            <div
              className="uh-card w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 text-2xl font-extrabold">
                <span>📣</span> <span>UniHero Hub</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-white/12 px-5 py-2.5 text-base font-semibold hover:bg-white/20"
                  href="https://t.me/UniHero_news"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📣 UniHero_News
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-white/12 px-5 py-2.5 text-base font-semibold hover:bg-white/20"
                  href="https://t.me/UniHero_BOT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🤖 UniHero BOT
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-white/12 px-5 py-2.5 text-base font-semibold hover:bg-white/20"
                  href="https://t.me/Unihero_admin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  👨🏻‍💻 Admin
                </a>
              </div>
            </div>
          )}

          {/* Study Podcasts */}
          {modal === "podcasts" && (
            <div
              className="uh-card w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b274a]/95 p-7 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 text-2xl font-extrabold">
                <span>🎧</span> <span>Study Podcasts</span>
              </div>
              <p className="mt-3 text-white/80">
                “Start learn” ni bosing — ro‘yxatdan tasodifiy (random) bir kanal/playlist ochiladi.
              </p>
              <div className="mt-6">
                <button
                  className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-3 text-lg font-semibold hover:bg-white/20"
                  onClick={() => open(randomPodcast)}
                >
                  Start learn
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {PODCASTS.map((u) => (
                  <a
                    key={u}
                    href={u}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
                  >
                    {new URL(u).host.replace("www.", "")}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
