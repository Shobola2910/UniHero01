"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteLogo from "@/components/SiteLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/news", label: "News" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // lock page scroll when menu is open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prevOverflow || "";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-brand-950/90 to-brand-950/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <SiteLogo size={40} useWordmark />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 rounded-full px-2 py-1 border border-white/10 bg-white/5 backdrop-blur">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="px-3 py-1.5 rounded-full text-sm text-brand-100 hover:bg-white/10">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15"
        >
          ☰
        </button>
      </div>

      {/* ---------- FULLSCREEN MOBILE MENU (solid background) ---------- */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-brand-950 text-brand-100 safe-px safe-pt safe-pb"
          role="dialog"
          aria-modal="true"
          onTouchMove={(e) => e.stopPropagation()} // prevent behind scroll on iOS
        >
          <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 rounded-full bg-white/10 border border-white/15 text-xl"
            >
              ✕
            </button>
          </div>

          {/* Simple list — no rounded boxes, no translucent bg */}
          <nav className="mx-auto max-w-6xl px-4 overflow-y-auto">
            <ul className="divide-y divide-white/10">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block w-full py-4 text-lg"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
