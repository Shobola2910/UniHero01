// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Nav = { href: string; label: string; icon: string };

const links: Nav[] = [
  { href: "#home",      label: "Home",      icon: "🏠" }, // uy
  { href: "#about",     label: "About",     icon: "ℹ️" }, // info
  { href: "#resources", label: "Resources", icon: "📚" }, // resurslar
  { href: "#contact",   label: "Contact",   icon: "✉️" }, // aloqa
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo + separator */}
        <div className="flex items-center gap-3">
          <Link href="#home" className="flex items-center gap-2">
            {/* Agar logoyingiz boshqa yo'lda bo'lsa, src ni almashtiring */}
            <Image
              src="/brand/logo-dark.png"
              alt="UniHero"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="font-semibold">UniHero</span>
          </Link>
          <span className="hidden text-zinc-500 md:inline">|</span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
            >
              <span aria-hidden className="transition-transform group-hover:-translate-y-0.5">
                {n.icon}
              </span>
              <span>{n.label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-zinc-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            {links.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <span aria-hidden>{n.icon}</span>
                <span>{n.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
