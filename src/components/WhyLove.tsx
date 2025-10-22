export default function WhyLove() {
  const features = [
    {
      emoji: "📘",
      title: "Clear guidance",
      desc: "No fluff — short, practical and exam-aligned.",
    },
    {
      emoji: "🧠",
      title: "Smart tools",
      desc: "Templates, checklists and quick planners.",
    },
    {
      emoji: "⚡",
      title: "Fast help",
      desc: "Ask on Telegram, get answers in minutes.",
    },
    {
      emoji: "🎯",
      title: "Student-first",
      desc: "Built by and for learners — friendly and simple.",
    },
  ];

  const stats = [
    { value: "100+", label: "Students helped" },
    { value: "50+",  label: "Helpful resources" },
    { value: "~5 min", label: "Avg. reply time" },
    { value: "24/7", label: "Support availability" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-100">
          Why students love UniHero
        </h2>
        <p className="mt-1 text-brand-100/80">
          Built around clarity, speed and a friendly vibe
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="uh-card p-5 md:p-6 border-brand-100/15 bg-gradient-to-b from-brand-900/20 to-brand-600/10"
          >
            <div className="text-2xl mb-3" aria-hidden>{f.emoji}</div>
            <div className="font-semibold text-brand-100">{f.title}</div>
            <p className="mt-1 text-sm text-brand-100/85">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div className="mt-6 md:mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="uh-card p-6 text-center border-brand-100/15 bg-gradient-to-b from-brand-900/15 to-brand-600/10"
          >
            <div className="text-2xl md:text-3xl font-extrabold text-brand-100">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-brand-100/85">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
