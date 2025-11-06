// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#resources", label: "RESOURCE" },
    { href: "#contact", label: "CONTACT" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="#home" className="font-bold tracking-wide">UniHero</Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-zinc-300 hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden rounded-lg border border-white/10 px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-zinc-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-zinc-300 hover:text-white">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
