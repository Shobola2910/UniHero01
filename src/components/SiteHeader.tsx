"use client";

import Link from "next/link";
import SiteLogo from "@/components/SiteLogo";
import { BRAND } from "@/config/brand";
import { useState } from "react";
import MobileMenu from "@/components/MobileMenu";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-brand-900/30
                         bg-brand-950/70 backdrop-blur supports-[backdrop-filter]:bg-brand-950/50">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between text-white">
          <SiteLogo />
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/community">Community</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Mobile trigger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>

          <span className="hidden md:inline text-xs text-brand-100/90">{BRAND.tagline}</span>
        </div>
      </header>

      {/* Mobile Menu + Backdrop */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
