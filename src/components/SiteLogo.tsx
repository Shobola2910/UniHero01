"use client";

import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";

type SiteLogoProps = {
  withText?: boolean;
  className?: string;
  priority?: boolean;
};

export default function SiteLogo({ withText = false, className = "", priority }: SiteLogoProps) {
  return (
    <Link href="/" aria-label={BRAND.name} className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src={BRAND.assets.logoLight}
        alt={`${BRAND.name} logo`}
        width={32}
        height={32}
        className="dark:hidden"
        priority={priority}
      />
      <Image
        src={BRAND.assets.logoDark}
        alt={`${BRAND.name} logo`}
        width={32}
        height={32}
        className="hidden dark:block"
        priority={priority}
      />
      {withText && (
        <span className="text-base font-semibold tracking-tight">{BRAND.name}</span>
      )}
    </Link>
  );
}

