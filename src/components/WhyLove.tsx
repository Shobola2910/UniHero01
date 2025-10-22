// Interactive feature & stats section with hover/press animations (no extra deps)

function FeatureCard({
  emoji,
  title,
  desc,
}: {
  emoji: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      tabIndex={0}
      role="button"
      className="
        group relative uh-card p-5 md:p-6 border-brand-100/15
        bg-gradient-to-b from-brand-900/20 to-brand-600/10
        outline-none
        transition-transform duration-300 ease-out
        hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]
        focus-visible:ring-2 focus-visible:ring-brand-100/60
      "
    >
      {/* subtle corner highlight on hover */}
      <div
        className="
          pointer-events-none absolute -top-2 -right-2 h-12 w-12 rounded-full
          bg-white/10 blur-md opacity-0
          transition-opacity duration-300 group-hover:opacity-100
        "
      />
      <div className="text-2xl mb-3" aria-hidden>
        {emoji}
      </div>
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
      className="
        group relative uh-card p-6 text-center border-brand-100/15
        bg-gradient-to-b from-brand-900/15 to-brand-600/10
        outline-none
        transition-transform duration-300 ease-out
        hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]
        focus-visible:ring-2 focus-visible:ring-brand-100/60
      "
    >
      <div
        className="
          pointer-events-none absolute -top-2 -right-2 h-12 w-12 rounded-full
          bg-white/10 blur-md opacity-0
          transition-opacity duration-300 group-hover:opacity-100
        "
      />
      <div className="text-2xl md:text-3xl font-extrabold text-brand-100">
        {value}
      </div>
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
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-100">
          Why students love UniHero
        </h2>
        <p className="mt-1 text-brand-100/80">Built around clarity, speed and a friendly vibe</p>
      </div>

      {/* Features */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>

      {/* Stats */}
      <div className="mt-6 md:mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
