"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[rgba(7,24,53,0.75)] backdrop-blur">
      <div className="container mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          aria-label="UniHero Home"
        >
          {/* If you have a logo image, replace the emoji with <img/> or <Image/> */}
          <span className="text-xl">🎓</span>
          <span className="text-white">UniHero</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[
                "text-sm transition-colors",
                "hover:text-white",
                isActive(href) ? "text-white" : "text-white/75",
              ].join(" ")}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80 ring-1 ring-white/15 hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {/* hamburger / close */}
          <svg
            className={`h-5 w-5 ${open ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
          <svg
            className={`h-5 w-5 ${open ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[rgba(7,24,53,0.9)]">
          <nav className="container mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={[
                  "rounded-lg px-3 py-2 text-sm ring-1 ring-white/10",
                  "hover:bg-white/10",
                  isActive(href) ? "text-white bg-white/10" : "text-white/80",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
