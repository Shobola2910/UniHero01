// src/app/page.tsx
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ResourcesGrid from "@/components/ResourcesGrid";
import type { ReactNode } from "react";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Decorative glowing blobs */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(86,148,255,0.25),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(23,213,255,0.15),transparent_60%)] blur-2xl" />

      {/* HERO */}
      <section
        aria-labelledby="hero-title"
        className="container mx-auto max-w-6xl px-4 pt-12 pb-8 md:pt-16 md:pb-12"
      >
        <div className="relative rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          <div className="relative">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/15">
              ✨ For Students, By Students
            </p>

            <h1 id="hero-title" className="text-3xl font-extrabold leading-tight md:text-5xl">
              <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                UniHero — For Students, By Students
              </span>
            </h1>

            <p className="mt-3 max-w-3xl text-base text-white/80 md:text-lg">
              Practical resources, a helpful community, and simple tools. Learn
              smarter with study guides, templates and quick support.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTA href="/#why" variant="primary">Join the Community</CTA>
              <CTA href="/about" variant="ghost">Learn More</CTA>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STUDENTS LOVE UNI HERO */}
      <section id="why" className="container mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          title="Why students love UniHero"
          subtitle="Built around clarity, speed and a friendly vibe"
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* RESOURCES (now visible on Home) */}
      <section id="resources" className="container mx-auto max-w-6xl px-4 py-10">
        <SectionHeader
          title="Explore Our Resources"
          subtitle="Everything you need to study smarter"
        />
        <div className="mt-4">
          <ResourcesGrid />
        </div>
      </section>

      {/* STATS */}
      <section className="container mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                role="group"
                aria-label={s.label}
              >
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="mt-1 text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-white/60">
            Growing steadily — join us and be part of the story 🚀
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="container mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#0f2250] to-[#1b2f66] p-6 md:p-8 ring-1 ring-white/10 shadow-[0_18px_45px_rgba(0,0,0,.35)]">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-bold md:text-2xl">Ready to get started?</h3>
              <p className="text-white/80">
                Ping us on Telegram and we’ll point you to the right materials.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTA href="https://t.me/UniHero_BOT" target="_blank" variant="primary">
                Chat with Bot 🤖
              </CTA>
              <CTA href="https://t.me/UniHero_admin" target="_blank" variant="ghost">
                Talk to Admin 👤
              </CTA>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small building blocks ---------- */

function CTA({
  href,
  children,
  variant = "primary",
  target,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  target?: "_blank";
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-sky-400";
  const styles =
    variant === "primary"
      ? "bg-unihero-accent text-white shadow hover:scale-[1.03]"
      : "bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15";
  return (
    <Link href={href} target={target} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

type Feature = { icon: string; title: string; desc: string };

const FEATURES: Feature[] = [
  { icon: "📘", title: "Clear guidance", desc: "No fluff — short, practical and exam-aligned." },
  { icon: "🧠", title: "Smart tools", desc: "Templates, checklists and quick planners." },
  { icon: "⚡", title: "Fast help", desc: "Ask on Telegram, get answers in minutes." },
  { icon: "🎯", title: "Student-first", desc: "Built by and for learners — friendly and simple." },
];

function FeatureCard({ icon, title, desc }: Feature) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-0.5 hover:ring-white/25">
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_60%)]" />
      <div className="mb-3 text-2xl drop-shadow">{icon}</div>
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-1 text-sm text-white/75">{desc}</p>
    </div>
  );
}

const STATS = [
  { value: "100+", label: "Students helped" },
  { value: "50+", label: "Helpful resources" },
  { value: "~5 min", label: "Avg. reply time" },
  { value: "24/7", label: "Support availability" },
];
