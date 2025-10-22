import Link from "next/link";
import SiteLogo from "@/components/SiteLogo";
import { BRAND } from "@/config/brand";

export default function SiteHeader() {
  return (
    <header className="w-full border-b bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <SiteLogo withText priority />
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <span className="hidden md:inline text-xs text-zinc-500">{BRAND.tagline}</span>
      </div>
    </header>
  );
}
