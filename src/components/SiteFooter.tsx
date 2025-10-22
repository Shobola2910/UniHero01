import FooterSocials from "@/components/FooterSocials";

export default function SiteFooter() {
  return (
    <footer className="border-t border-brand-900/30 bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-4 grid gap-4 md:grid-cols-3 items-center">
        <div className="space-y-1">
          <div className="font-semibold">UniHero</div>
          <p className="text-xs opacity-70">© {new Date().getFullYear()} UniHero. All rights reserved.</p>
        </div>

        {/* o‘rta ustun bo‘sh – balans uchun */}
        <div className="hidden md:block" />

        {/* social pill’lar – bitta qatorda, o‘ngga tekislanadi */}
        <div className="md:justify-self-end">
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}
