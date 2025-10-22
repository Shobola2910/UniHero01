"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={[
        // pill look
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium",
        "border border-white/10 shadow-sm",
        "bg-gradient-to-b from-brand-900/70 to-brand-600/30",
        "text-brand-100",
        // transitions / hover
        "transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-100/60",
        // active
        active
          ? "ring-1 ring-brand-100/50"
          : "opacity-90 hover:opacity-100",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
