// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-6 md:pt-14">
      {/* label */}
      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/90">
        <span>✨</span> <span>For Students, By Students</span>
      </div>

      {/* katta card */}
      <div className="mt-4 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(1,28,64,.35)] md:p-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
          UniHero — For Students, By Students
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Practical resources, a helpful community, and simple tools. Learn smarter
          with study guides, templates and quick support.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="https://t.me/UniHero_News"
            target="_blank"
            rel="noreferrer"
            className="uh-btn"
          >
            Join the Community
          </a>
          <a href="#about" className="uh-btn-ghost">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
