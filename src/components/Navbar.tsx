"use client";
import React from "react";
import Link from "next/link";

type Nav = { href: string; label: string; icon: React.ReactNode };

const IconHome = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
  </svg>
);
const IconAbout = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8h.01M11 12h2v6h-2z" />
  </svg>
);
const IconBook = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5V5.5a2 2 0 0 1 2-2h5v16H6a2 2 0 0 1-2-2z" />
    <path d="M13 3.5h5a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2h-5z" />
  </svg>
);
const IconPhone = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.98.36 1.93.68 2.84a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.24-1.2a2 2 0 0 1 2.1-.45c.91.32 1.86.55 2.84.68A2 2 0 0 1 22 16.92z" />
  </svg>
);

const NAVS: Nav[] = [
  { href: "#home", label: "HOME", icon: IconHome },
  { href: "#about", label: "ABOUT", icon: IconAbout },
  { href: "#resources", label: "RESOURCE", icon: IconBook },
  { href: "#contact", label: "CONTACT", icon: IconPhone },
];

export default function Navbar() {
  return (
    <header id="home" className="safe-pt">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/brand/logo-light.png" alt="UniHero" className="h-9 w-9" />
          <span className="text-2xl font-extrabold tracking-wide">UniHero</span>
        </div>

        {/* Pills */}
        <nav className="flex flex-wrap items-center gap-3">
          {NAVS.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="uh-pill flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold tracking-wide hover:bg-white/10"
            >
              <span className="opacity-95">{n.icon}</span>
              <span>{n.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
