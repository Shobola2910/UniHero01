import Link from "next/link";
import SiteLogo from "@/components/SiteLogo";
import { BRAND } from "@/config/brand";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-900/30
                       bg-brand-950/70 backdrop-blur supports-[backdrop-filter]:bg-brand-950/50">
      <div className="u-container h-14 flex items-center justify-between text-white">
        <SiteLogo />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/community">Community</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <span className="hidden md:inline text-xs text-brand-100/90">{BRAND.tagline}</span>
      </div>
    </header>
  );
}
