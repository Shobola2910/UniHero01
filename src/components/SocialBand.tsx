"use client";

import Link from "next/link";

export default function SocialBand() {
  return (
    <section
      aria-label="Join UniHero on Telegram"
      className="container mx-auto max-w-6xl px-4 pb-10"
    >
      <div className="
        relative overflow-hidden rounded-3xl
        bg-gradient-to-br from-[#0f2250] to-[#1b2f66]
        ring-1 ring-white/10 shadow-[0_18px_45px_rgba(0,0,0,.35)]
      ">
        {/* glow */}
        <div className="pointer-events-none absolute -top-16 -left-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(86,148,255,0.25),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-8 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_center,rgba(23,213,255,0.18),transparent_60%)] blur-2xl" />

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 md:p-8">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/60">Stay in the loop</p>
            <h3 className="mt-1 text-xl md:text-2xl font-bold">
              Join <span className="text-unihero-accent">UniHero</span> on Telegram
            </h3>
            <p className="mt-1 text-white/75">
              News, quick help and admin contact — all in one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Pill
              href="https://t.me/UniHero_news"
              label="@UniHero_news"
              icon="📣"
            />
            <Pill
              href="https://t.me/UniHero_BOT"
              label="@UniHero_BOT"
              icon="🤖"
              variant="solid"
            />
            <Pill
              href="https://t.me/UniHero_admin"
              label="@UniHero_admin"
              icon="👤"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({
  href,
  label,
  icon,
  variant = "ghost",
}: {
  href: string;
  label: string;
  icon: string;
  variant?: "solid" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-sky-400";
  const styles =
    variant === "solid"
      ? "bg-unihero-accent text-white hover:scale-[1.03]"
      : "bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15";
  return (
    <Link
      href={href}
      target="_blank"
      className={`${base} ${styles}`}
      rel="noopener noreferrer"
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </Link>
  );
}

