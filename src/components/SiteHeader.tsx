import Link from "next/link";
import SiteLogo from "@/components/SiteLogo";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-brand-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between text-brand-100">
        {/* KATTA logo + wordmark */}
        <SiteLogo size={48} useWordmark />

        <nav className="hidden md:flex items-center gap-6 text-sm">
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
