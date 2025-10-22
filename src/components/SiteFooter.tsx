import { BRAND } from "@/config/brand";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div className="flex items-center gap-3">
          <Image src={BRAND.assets.logoLight} alt="logo" width={28} height={28} className="dark:hidden" />
          <Image src={BRAND.assets.logoDark} alt="logo" width={28} height={28} className="hidden dark:block" />
          <span className="font-semibold">{BRAND.name}</span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{BRAND.tagline}</p>
        <p className="text-xs text-right text-zinc-500">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
