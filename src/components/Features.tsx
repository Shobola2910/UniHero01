// src/components/Features.tsx
export default function Features() {
  const items = [
    { icon: "📘", title: "Clear guidance", desc: "No fluff — short, practical and exam-aligned." },
    { icon: "🧠", title: "Smart tools",   desc: "Templates, checklists and quick planners." },
    { icon: "⚡", title: "Fast help",     desc: "Ask on Telegram, get answers in minutes." },
    { icon: "🎯", title: "Student-first", desc: "Built by and for learners — friendly and simple." },
    { icon: "⏰", title: "24/7",          desc: "Always-on support for students." },
  ];
  return (
    <section id="about" className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold">Why students love UniHero</h2>
        <p className="mt-2 text-zinc-300">Built around clarity, speed and a friendly vibe</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgba(31,41,55,0.08)]"
            >
              <div className="text-3xl">{i.icon}</div>
              <h3 className="mt-2 text-lg font-semibold">{i.title}</h3>
              <p className="text-zinc-300">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
