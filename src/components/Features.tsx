"use client";
import { useMemo, useState } from "react";

const PODCASTS = [
  "https://www.youtube.com/c/aliabdaal",
  "https://www.youtube.com/c/ThomasFrank",
  "https://www.youtube.com/c/MattDAvella",
  "https://www.youtube.com/c/timferriss",
  "https://www.youtube.com/playlist?list=PLEITKg6BYjonkVKAPYaHMMa4-4ZU-EEYs",
  "https://www.youtube.com/c/HurrySlowly",
  "https://www.youtube.com/c/MarieForleo",
  "https://www.youtube.com/playlist?list=PL27GCkYOrUzvoENAkd1MfXG2NnkdbIJMq",
  "https://www.youtube.com/c/CalNewportDeepQuestions",
  "https://www.youtube.com/c/BeforeBreakfast",
];

const QUOTES = [
  "Success is the sum of small efforts, repeated day in and day out.",
  "Discipline is choosing what you want most over what you want now.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Focus on progress, not perfection.",
  "You don’t have to be great to start, but you have to start to be great.",
  // ... xohlasangiz 500 gacha kengaytiring (data/quotes.json qilib ham saqlashingiz mumkin)
];

function sample<T>(arr: T[], n: number) {
  const a = [...arr]; const out: T[] = [];
  while (out.length < n && a.length) out.push(a.splice(Math.floor(Math.random()*a.length),1)[0]);
  return out;
}

export default function Features() {
  const [open, setOpen] = useState<null | "assign" | "motivation">(null);
  const podcasts = useMemo(() => sample(PODCASTS, 10), []);

  return (
    <section id="resources" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why students love UniHero</h2>
      <p className="mt-1 text-white/80">Built around clarity, speed and a friendly vibe</p>

      {/* 2 ustunli joylashuv, markazda logo bo'lishi shart emas – sizda allaqachon bor */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Chap bloklar */}
        <div className="space-y-6">
          <button className="uh-pill uh-floaty w-full justify-between text-lg"
            onClick={() => setOpen("assign")}
            title="Order assignments via UniHero BOT">
            <span>📚 Assignments</span><span>→</span>
          </button>

          <a className="uh-pill uh-floaty w-full justify-between text-lg"
             href="https://t.me/UniHero_BOT?start=exam_prep" target="_blank">
            <span>✏️ Exam Prep</span><span>→</span>
          </a>

          <button className="uh-pill uh-floaty w-full justify-between text-lg"
            onClick={() => setOpen("motivation")}>
            <span>🚀 Motivation</span><span>→</span>
          </button>
        </div>

        {/* O'ng bloklar */}
        <div className="space-y-6">
          <a className="uh-pill uh-floaty w-full justify-between text-lg"
             href="https://t.me/UniHero_BOT?start=study_guides" target="_blank">
            <span>📖 Study Guides</span><span>→</span>
          </a>

          <a className="uh-pill uh-floaty w-full justify-between text-lg"
             href="https://t.me/UniHero_BOT?start=time_mgmt" target="_blank">
            <span>🗓️ Time Management</span><span>→</span>
          </a>

          <div className="uh-card p-4">
            <h3 className="text-white font-bold mb-2">🎧 Study Podcasts</h3>
            <div className="flex flex-wrap gap-2">
              {podcasts.map((u) => (
                <a key={u} href={u} target="_blank" className="uh-pill">{new URL(u).host}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* UniHero hub – bot/kanal/admin */}
      <div className="mt-8 flex flex-wrap gap-3">
        <a className="uh-pill" href="https://t.me/UniHero_news" target="_blank">📣 UniHero_News</a>
        <a className="uh-pill" href="https://t.me/UniHero_BOT"   target="_blank">🤖 UniHero BOT</a>
        <a className="uh-pill" href="https://t.me/Unihero_admin" target="_blank">👨🏻‍💻 Admin</a>
      </div>

      {/* Modallar */}
      {open === "assign" && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setOpen(null)}>
          <div className="uh-card max-w-lg w-full p-6" onClick={(e)=>e.stopPropagation()}>
            <h4 className="text-xl font-bold text-white">Assignments</h4>
            <p className="mt-2 text-white/80">
              Buyurtma qilish uchun botga o‘ting. Orqa fon blur qilingan.
            </p>
            <div className="mt-4 flex gap-3">
              <a className="uh-btn" href="https://t.me/UniHero_BOT?start=assignments" target="_blank">Open UniHero BOT</a>
              <button className="uh-btn-ghost" onClick={() => setOpen(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {open === "motivation" && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setOpen(null)}>
          <div className="uh-card max-w-xl w-full p-6" onClick={(e)=>e.stopPropagation()}>
            <h4 className="text-xl font-bold text-white">Daily Motivation</h4>
            <ul className="mt-3 list-disc pl-5 text-white/90 space-y-1">
              {sample(QUOTES, 8).map((q,i)=>(<li key={i}>{q}</li>))}
            </ul>
            <div className="mt-4 text-sm text-white/60">Qo‘shimcha sitatalarni <code>QUOTES</code> massiviga qo‘shing (500 gacha).</div>
            <div className="mt-4">
              <button className="uh-btn" onClick={() => setOpen(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
