// src/components/Hero.tsx
export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="uh-card bg-white/5 p-6 md:p-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
          ✨ For Students, By Students
        </span>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
          UniHero — For <br className="hidden sm:block" />
          Students, By Students
        </h1>

        <p className="mt-3 max-w-2xl text-white/80">
          Practical resources, a helpful community, and simple tools. Learn smarter with study guides,
          templates and quick support.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://t.me/UniHero_news"
            target="_blank"
            className="rounded-xl bg-[#54ACBF] px-4 py-2 font-semibold text-[#011C40] hover:opacity-90"
          >
            Join the Community
          </a>
          <a
            href="#about"
            className="rounded-xl border border-white/30 px-4 py-2 font-semibold hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
