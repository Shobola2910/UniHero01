function FeatureCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div
      tabIndex={0}
      role="button"
      className="group relative uh-card p-4 sm:p-5 md:p-6 border-brand-100/15
                 bg-gradient-to-b from-brand-900/20 to-brand-600/10
                 outline-none transition-transform duration-300 ease-out
                 hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]
                 focus-visible:ring-2 focus-visible:ring-brand-100/60 touch-pan-y"
    >
      <div className="text-xl sm:text-2xl mb-2 sm:mb-3" aria-hidden>{emoji}</div>
      <div className="font-semibold text-brand-100">{title}</div>
      <p className="mt-1 text-sm text-brand-100/85">{desc}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      tabIndex={0}
      role="button"
      className="group relative uh-card p-5 text-center border-brand-100/15
                 bg-gradient-to-b from-brand-900/15 to-brand-600/10
                 outline-none transition-transform duration-300 ease-out
                 hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]
                 focus-visible:ring-2 focus-visible:ring-brand-100/60 touch-pan-y"
    >
      <div className="text-2xl md:text-3xl font-extrabold text-brand-100">{value}</div>
      <div className="mt-1 text-sm text-brand-100/85">{label}</div>
    </div>
  );
}

export default function WhyLove() {
  const features = [
    { emoji: "📘", title: "Clear guidance", desc: "No fluff — short, practical and exam-aligned." },
    { emoji: "🧠", title: "Smart tools",   desc: "Templates, checklists and quick planners." },
    { emoji: "⚡", title: "Fast help",     desc: "Ask on Telegram, get answers in minutes." },
    { emoji: "🎯", title: "Student-first", desc: "Built by and for learners — friendly and simple." },
  ];
  const stats = [
    { value: "100+",  label: "Students helped" },
    { value: "50+",   label: "Helpful resources" },
    { value: "~5 min",label: "Avg. reply time" },
    { value: "24/7",  label: "Support availability" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-100">Why students love UniHero</h2>
        <p className="mt-1 text-brand-100/80 text-[15px] sm:text-base">Built around clarity, speed and a friendly vibe</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {features.map((f) => <FeatureCard key={f.title} {...f} />)}
      </div>

      <div className="mt-5 sm:mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
    </section>
  );
}
