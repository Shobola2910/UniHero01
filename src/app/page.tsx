import Image from "next/image";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Hero panel */}
      <section className="uh-card p-8 md:p-10 bg-white/5 rounded-3xl border border-white/10">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 mb-4">
          <span>✨</span> <span>For Students, By Students</span>
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
          UniHero — For Students, By Students
        </h1>
        <p className="mt-4 text-white/85 max-w-2xl">
          Practical resources, a helpful community, and simple tools. Learn smarter with study guides, templates and quick support.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="https://t.me/UniHero_news"
            target="_blank"
            className="rounded-xl bg-[#115e9b] hover:bg-[#0f538a] px-5 py-3 font-semibold"
          >
            Join the Community
          </a>
          <a href="/#about" className="rounded-xl bg-white/10 hover:bg-white/15 px-5 py-3 font-semibold">
            Learn More
          </a>
        </div>
      </section>

      {/* Keyingisi: About/Resources/Contact bo‘limlaringiz… */}
    </div>
  );
}
