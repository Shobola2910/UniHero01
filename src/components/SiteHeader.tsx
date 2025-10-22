import SiteLogo from "@/components/SiteLogo";
import NavLink from "@/components/ui/NavLink";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-brand-950/80 to-brand-950/60 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo/wordmark kattaroq */}
        <SiteLogo size={48} useWordmark />

        {/* Glass nav container */}
        <nav
          className="
            hidden md:flex items-center gap-2
            rounded-full px-2 py-1
            border border-white/10 shadow
            bg-gradient-to-b from-brand-900/40 to-brand-600/20
            backdrop-blur
          "
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/news">News</NavLink>
        </nav>

        {/* Optional: mobile menu trigger (hozircha joy tutuvchi) */}
        <div className="md:hidden w-8 h-8 rounded-full bg-white/10 border border-white/15" />
      </div>
    </header>
  );
}
