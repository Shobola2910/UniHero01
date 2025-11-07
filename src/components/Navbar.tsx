"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Nav = { href: string; label: string; icon: React.ReactNode };

const IconHome = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 10v10h5v-6h4v6h5V10" />
  </svg>
);
const IconInfo = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8h.01M10.5 11.5h3V17" />
  </svg>
);
const IconBook = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 5h12a3 3 0 0 1 3 3v11H7a3 3 0 0 1-3-3V5Z" />
    <path d="M7 5v11" />
  </svg>
);
const IconPhone = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.2 2h3a2 2 0 0 1 2 1.72 12.66 12.66 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.35-.45a2 2 0 0 1 2.11-.45 12.66 12.66 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const NAV: Nav[] = [
  { href: "#home", label: "HOME", icon: IconHome },
  { href: "#about", label: "ABOUT", icon: IconInfo },
  { href: "#resources", label: "RESOURCES", icon: IconBook },
  { href: "#contact", label: "CONTACT", icon: IconPhone },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-[linear-gradient(180deg,#011C40,#023859)]/92 backdrop-blur safe-pt">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/brand/logo-light.png" alt="UniHero" className="h-7 w-7" />
          <span className="text-lg font-extrabold text-white">UniHero</span>
        </div>

        <nav className="rounded-full border border-white/15 bg-white/[.06] px-2 py-1 shadow-[0_8px_30px_rgba(1,28,64,.35)]">
          <ul className="flex items-center gap-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-semibold text-white/90 hover:bg-white/10"
                >
                  <span className="text-white/90">{n.icon}</span>
                  <span className="tracking-wide">{n.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
