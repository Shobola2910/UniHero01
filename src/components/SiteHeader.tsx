"use client";

import Link from "next/link";
import SiteLogo from "@/components/SiteLogo";
import { useState } from "react";
import MobileMenu from "@/components/MobileMenu";

// kichik SVG menu ikonkasi (nol-dependency)
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-30 w-full border-b border-brand-900/30
                   bg-brand-950/80 backdrop-blur supports-[backdrop-filter]:bg-brand-950/60"
      >
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center gap-4 text-white">
          <SiteLogo />

          {/* desktop nav - o‘ngga surilgan */}
          <nav className="ml-auto hidden md:flex items-center text-[15px] font-medium">
            {NAV.map((item, idx) => (
              <div key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-md hover:bg-white/10 transition"
                >
                  {item.label}
                </Link>
                {idx < NAV.length - 1 && (
                  <span className="mx-1 h-5 w-px bg-white/25" aria-hidden />
                )}
              </div>
            ))}
          </nav>

          {/* mobile trigger */}
          <button
            className="md:hidden ml-auto p-2 rounded-lg hover:bg-white/10"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
