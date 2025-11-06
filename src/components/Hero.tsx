// src/components/Hero.tsx
import Badges from "./Badges";

export default function Hero() {
  return (
    <section id="home" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm text-zinc-400">✨ For Students, By Students</p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            UniHero — For Students, By Students
          </h1>
          <p className="mt-4 text-zinc-300">
            Practical resources, a helpful community, and simple tools.
            Learn smarter with study guides, templates and quick support.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500" href="https://t.me/UniHero_News" target="_blank" rel="noreferrer">
              Join the Community
            </a>
            <a className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20" href="#about">
              Learn More
            </a>
          </div>
          <Badges />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgba(31,41,55,0.08)]">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm text-zinc-300">Support availability</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-3xl font-bold">🚀</p>
              <p className="text-sm text-zinc-300">Motivation</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-3xl font-bold">📝</p>
              <p className="text-sm text-zinc-300">Assignments</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-3xl font-bold">📚</p>
              <p className="text-sm text-zinc-300">Exam Prep</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
