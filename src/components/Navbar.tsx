// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type NavItem = { href: string; label: string; icon: React.ReactNode };

const IconHome = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 10.5L12 3l9 7.5" /><path d="M5 10v10h14V10" />
  </svg>
);
const IconAbout = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" /><path d="M12 8v8M12 16h.01" />
  </svg>
);
const IconRes = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="14" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" />
  </svg>
);
const IconContact = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5l-3 3V5a2 2 0 0 1 2-2h11" />
    <path d="M22 2l-10 10" /><path d="M15 2h7v7" />
  </svg>
);

const NAV: NavItem[] = [
  { href: "#home",      label: "Home",      icon: IconHome },
  { href: "#about",     label: "About",     icon: IconAbout },
  { href: "#resources", label: "Resources", icon: IconRes },
  { href: "#contact",   label: "Contact",   icon: IconContact },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // hash'li link bosilganda mobil menyuni yopish
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#021024]/60 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link href="#home" className="font-extrabold text-white text-xl flex items-center gap-2">
          <span className="inline-grid place-items-center rounded-md bg-white/10 w-8 h-8">U</span>
          UniHero
        </Link>

        <button
          className="ml-auto md:hidden rounded-md border border-white/10 px-3 py-2 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="uh-mobile-nav"
        >
          Menu
        </button>

        <ul className="hidden md:flex items-center gap-1 ml-auto">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="uh-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-white/90 hover:bg-white/10"
              >
                {n.icon}<span>{n.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* mobile */}
      {open && (
        <div id="uh-mobile-nav" className="md:hidden border-t border-white/10 bg-[#021024]/80">
          <ul className="mx-auto max-w-6xl px-4 py-2 grid gap-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-white/10 text-white"
                  onClick={() => setOpen(false)}
                >
                  {n.icon}<span>{n.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
