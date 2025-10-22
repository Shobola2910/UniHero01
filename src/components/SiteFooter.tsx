import { BRAND } from "@/config/brand";

export default function SiteFooter() {
  return (
    <footer className="border-t border-brand-900/30 bg-brand-950 text-brand-100">
      <div className="u-container py-10 grid gap-6 md:grid-cols-3 items-center">
        <div className="font-semibold">{BRAND.name}</div>
        <p className="text-sm opacity-80">{BRAND.tagline}</p>
        <p className="text-xs md:text-right opacity-70">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
