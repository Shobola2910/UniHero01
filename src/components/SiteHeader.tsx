"use client";

import Link from "next/link";
import SiteLogo from "@/components/SiteLogo";
import { BRAND } from "@/config/brand";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "@/components/MobileMenu";

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
            <Menu className="h-6 w-6" />
          </button>

          <span className="hidden md:inline text-xs text-brand-100/90">{BRAND.tagline}</span>
        </div>
      </header>

      {/* Mobile Menu + Backdrop */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
