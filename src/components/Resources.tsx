// src/components/Resources.tsx
export default function Resources() {
  const items = [
    { icon: "📖", title: "Study Guides" },
    { icon: "🎧", title: "Study Podcasts" },
    { icon: "📣", title: "UniHero_News" },
    { icon: "🤖", title: "UniHero BOT" },
    { icon: "👨🏻‍💻", title: "Admin" },
  ];
  return (
    <section id="resources" className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold">Resources</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.title}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgba(31,41,55,0.08)]"
            >
              <div className="text-3xl">{i.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{i.title}</h3>
                <p className="text-zinc-300">Coming soon…</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
