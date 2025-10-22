"use client";

import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-brand-950/90 to-brand-950/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <SiteLogo size={40} useWordmark />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 rounded-full px-2 py-1 border border-white/10 bg-white/5 backdrop-blur">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="px-3 py-1.5 rounded-full text-sm text-brand-100 hover:bg-white/10">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/15"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[82%] max-w-xs bg-brand-950 border-l border-white/10 p-4 safe-pb">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="h-9 w-9 rounded-full bg-white/10">✕</button>
            </div>
            <nav className="mt-4 grid gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-xl bg-white/5 border border-white/10 text-brand-100"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
