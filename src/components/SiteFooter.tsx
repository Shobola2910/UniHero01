import FooterSocials from "@/components/FooterSocials";

export default function SiteFooter() {
  return (
    <footer className="border-t border-brand-900/30 bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div className="font-semibold">UniHero</div>
        <p className="text-sm opacity-80">For Students, By Students</p>

        {/* social pills row (o‘ng tomonda, mobil’da o‘rtada) */}
        <FooterSocials />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-6 text-xs opacity-70">
        © {new Date().getFullYear()} UniHero. All rights reserved.
      </div>
    </footer>
  );
}
