import FooterSocials from "@/components/FooterSocials";

export default function SiteFooter() {
  return (
    <footer className="border-t border-brand-900/30 bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-4 grid gap-4 md:grid-cols-3 items-center">
        <div className="space-y-1">
          <div className="font-semibold">UniHero</div>
          {/* © yozuvini yuqoriroq – darrov brend ostida */}
          <p className="text-xs opacity-70">© {new Date().getFullYear()} UniHero. All rights reserved.</p>
        </div>

        {/* Tagline olib tashlandi – o'rni bo'sh qolsa, dekorativ chiziq qo'ymadik */}

        {/* Social pill’lar o‘ng tomonda */}
        <FooterSocials />
      </div>
    </footer>
  );
}
