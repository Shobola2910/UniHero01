"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string; icon: JSX.Element };

const IconHome = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 11l9-8 9 8" />
    <path d="M9 22V12h6v10" />
  </svg>
);
const IconAbout = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
const IconBook = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M4 4v15.5" />
    <path d="M20 22V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5" />
  </svg>
);
const IconPhone = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.64 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.21a2 2 0 0 1 2.11-.45c.83.31 1.7.52 2.6.64A2 2 0 0 1 22 16.92z" />
  </svg>
);

const NAV: NavItem[] = [
  { href: "/", label: "HOME", icon: IconHome },
  { href: "/#about", label: "ABOUT", icon: IconAbout },
  { href: "/#resources", label: "RESOURCE", icon: IconBook },
  { href: "/#contact", label: "CONTACT", icon: IconPhone },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[rgba(2,16,36,.82)] backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* LOGO — oq va katta */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Qalqon + shlyapa — oq ikon (SVG) */}
          <svg
            width="34"
            height="34"
            viewBox="0 0 64 64"
            className="text-white"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l20-7 20 7v18c0 12-8.5 22.7-20 26-11.5-3.3-20-14-20-26V14z" stroke="currentColor" strokeWidth="3" />
            <path d="M21 20h22M24 28h16M28 36h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="text-white font-extrabold text-2xl tracking-wide">UniHero</span>
        </Link>

        {/* NAV pills */}
        <nav className="hidden md:flex items-center gap-4">
          {NAV.map((n) => {
            const active =
              n.href === "/"
                ? pathname === "/"
                : (typeof window !== "undefined" && window.location.hash === n.href.replace("/#", "#")) || false;

            return (
              <Link
                key={n.href}
                href={n.href}
                className={[
                  "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold",
                  "text-white/95 border-white/20 hover:bg-white/10 transition",
                  active ? "bg-white/10" : "",
                ].join(" ")}
              >
                <span aria-hidden className="opacity-90">{n.icon}</span>
                <span className="tracking-wide">{n.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
