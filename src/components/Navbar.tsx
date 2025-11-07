// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type ReactNode } from "react";

type Nav = { href: string; label: string; icon: ReactNode };

const IconHome = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9.5 12 3l9 6.5" /><path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9" />
  </svg>
);
const IconInfo  = (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>);
const IconBook  = (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M20 22V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v13"/></svg>);
const IconPhone = (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.6 12.6 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-1.33a2 2 0 0 1 2.11-.45 12.6 12.6 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);

const links: Nav[] = [
  { href: "#home",      label: "HOME",      icon: IconHome  },
  { href: "#about",     label: "ABOUT",     icon: IconInfo  },
  { href: "#resources", label: "RESOURCES", icon: IconBook  },
  { href: "#contact",   label: "CONTACT",   icon: IconPhone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-white"
      style={{ backgroundImage: `linear-gradient(90deg, var(--uh-bg-soft) 0%, var(--uh-bg) 100%)`, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <Image src="/brand/logo-dark.png" alt="UniHero" width={30} height={30} className="select-none" />
          <span className="text-lg font-semibold">UniHero</span>
        </Link>

        {/* Desktop pills */}
        <nav className="hidden items-center gap-3 md:flex">
          {links.map((n) => (
            <a key={n.href} href={n.href} className="uh-pill uh-floaty">
              <spa
