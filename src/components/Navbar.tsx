// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import React from "react";

const pill =
  "inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 hover:bg-white/10 transition-colors";

const IconHome = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 10v10h14V10" />
  </svg>
);
const IconInfo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8h.01M11 12h2v6h-2z" />
  </svg>
);
const IconBook = () => (
  <svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M4 4v15.5" />
    <path d="M20 22V6a2 2 0 0 0-2-2H7" />
  </svg>
);
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.55 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.08a2 2 0 0 1 2.11-.45c.8.25 1.64.43 2.5.55A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061c3a]/90 backdrop-blur safe-px">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-3xl leading-none">🎓</span>
          <span className="text-2xl font-extrabold">UniHero</span>
        </Link>

        {/* Pills */}
        <nav className="hidden gap-3 md:flex">
          <a className={pill} href="#home"><IconHome /> <span>HOME</span></a>
          <a className={pill} href="#about"><IconInfo /> <span>ABOUT</span></a>
          <a className={pill} href="#resources"><IconBook /> <span>RESOURCES</span></a>
          <a className={pill} href="#contact"><IconPhone /> <span>CONTACT</span></a>
        </nav>
      </div>
    </header>
  );
}
