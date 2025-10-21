// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[rgba(6,18,46,0.6)] backdrop-blur">
      <div className="mx-auto flex h-16 md:h-20 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 md:gap-4">
          <div className="relative h-9 w-9 md:h-12 md:w-12">
            <Image
              src="/logo.png"            // keep your best transparent logo here
              alt="UniHero"
              fill
              className="object-contain drop-shadow"
              priority
            />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tight select-none">
            UniHero
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-white/90">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/news">News</Link>
        </nav>
      </div>
    </header>
  );
}
