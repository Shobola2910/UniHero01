"use client";

import { useEffect } from "react";
import Link from "next/link";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  // lock body scroll while menu is open
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-brand-950/80 backdrop-blur-sm transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-[88%] max-w-sm
                    bg-brand-900 text-brand-100 border-l border-brand-900/40
                    transition-transform duration-300 ease-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-4 h-14 border-b border-brand-900/40">
          <span className="font-semibold">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-lg hover:bg-white/10"
          >
            <XIcon />
          </button>
        </div>

        <nav className="px-4 py-4 space-y-2">
          <Link href="/" onClick={onClose} className="block rounded-2xl px-4 py-3 bg-brand-950/40 border border-brand-900/40">Home</Link>
          <Link href="/about" onClick={onClose} className="block rounded-2xl px-4 py-3 bg-brand-950/40 border border-brand-900/40">About</Link>
          <Link href="/resources" onClick={onClose} className="block rounded-2xl px-4 py-3 bg-brand-950/40 border border-brand-900/40">Resources</Link>
          <Link href="/community" onClick={onClose} className="block rounded-2xl px-4 py-3 bg-brand-950/40 border border-brand-900/40">Community</Link>
          <Link href="/events" onClick={onClose} className="block rounded-2xl px-4 py-3 bg-brand-950/40 border border-brand-900/40">Events</Link>
          <Link href="/contact" onClick={onClose} className="block rounded-2xl px-4 py-3 bg-brand-950/40 border border-brand-900/40">Contact</Link>
        </nav>
      </aside>
    </>
  );
}
