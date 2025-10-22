import Link from "next/link";

function Pill({
  href,
  emoji,
  text,
}: { href: string; emoji: string; text: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
        uh-pill rounded-full border border-white/12 bg-white/10
        px-4 py-2.5 flex items-center justify-center gap-2
        text-brand-100 shadow-sm
        hover:bg-white/15 active:scale-[0.99] transition
        w-full sm:w-auto
      "
    >
      <span aria-hidden>{emoji}</span>
      <span className="underline underline-offset-2">{text}</span>
    </Link>
  );
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-brand-100/85">
            <div className="font-semibold text-brand-100">UniHero</div>
            <div className="mt-1">© 2025 UniHero. All rights reserved.</div>
          </div>

          {/* Social pills – mobile: full width stack; desktop: row */}
          <div className="w-full sm:w-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Pill href="https://t.me/UniHero_news" emoji="📣" text="@UniHero_news" />
            <Pill href="https://t.me/UniHero_BOT"  emoji="🤖" text="@UniHero_BOT" />
            <Pill href="https://t.me/UniHero_admin" emoji="🧑‍💼" text="@UniHero_admin" />
          </div>
        </div>
      </div>
    </footer>
  );
}
