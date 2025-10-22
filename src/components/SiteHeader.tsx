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

  // Body scroll lock when drawer is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-brand-950/90 to-brand-950/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <SiteLogo size={40} useWordmark />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 rounded-full px-2 py-1 border border-white/10 bg-white/5 backdrop-blur">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-full text-sm text-brand-100 hover:bg-white/10"
            >
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

      {/* === FULLSCREEN MOBILE MENU — solid background, simple links === */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[70]">
          {/* solid background (bo'sh fon) */}
          <div className="absolute inset-0 bg-brand-950" />

          {/* content */}
          <div className="relative h-full w-full safe-px safe-pt safe-pb">
            <div className="mx-auto max-w-6xl px-4">
              <div className="h-16 flex items-center justify-between">
                <span className="font-semibold text-brand-100 text-lg">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="h-10 w-10 rounded-full bg-white/10 border border-white/15 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* oddiy list — kartochkasiz, fon yo‘q */}
              <nav className="mt-4 divide-y divide-white/10">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-brand-100 text-lg"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
