"use client";

import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";

type Props = {
  size?: 48 | 40 | 32;      // navbar icon o'lchami
  useWordmark?: boolean;     // true bo'lsa wordmark rasmini ishlatadi
};

export default function SiteLogo({ size = 48, useWordmark = true }: Props) {
  const s = size;
  // Wordmark bo'lsa: /brand/wordmark.png ni ishlatamiz (agar bo'lmasa text)
  if (useWordmark && BRAND.assets.wordmark) {
    return (
      <Link href="/" aria-label={BRAND.name} className="inline-flex items-center">
        <Image
          src={BRAND.assets.wordmark}
          alt={`${BRAND.name} wordmark`}
          width={140}
          height={s}
          priority
        />
      </Link>
    );
  }

  // Aks holda: ikonka + text
  return (
    <Link href="/" aria-label={BRAND.name} className="inline-flex items-center gap-2">
      <Image
        src={BRAND.assets.logoLight}
        alt={`${BRAND.name} logo`}
        width={s}
        height={s}
        className="dark:hidden"
        priority
      />
      <Image
        src={BRAND.assets.logoDark}
        alt={`${BRAND.name} logo`}
        width={s}
        height={s}
        className="hidden dark:block"
        priority
      />
      <span className="text-lg font-semibold tracking-tight">{BRAND.name}</span>
    </Link>
  );
}
