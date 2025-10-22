const LINKS = [
  { href: "https://t.me/UniHero_news",  label: "@UniHero_news",  emoji: "📢" },
  { href: "https://t.me/UniHero_BOT",   label: "@UniHero_BOT",   emoji: "🤖" },
  { href: "https://t.me/UniHero_admin", label: "@UniHero_admin", emoji: "👤" },
];

export default function FooterSocials() {
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
      {LINKS.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
          className="
            uh-pill group inline-flex items-center gap-2
            px-3 py-1.5 rounded-full font-semibold
            text-brand-100
            bg-gradient-to-r from-brand-900/90 to-brand-600/70
            border border-white/10 shadow
            transition-all duration-200
            hover:shadow-lg hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-100/60
          "
        >
          <span aria-hidden className="text-[16px]">{l.emoji}</span>
          <span className="underline underline-offset-2">{l.label}</span>
        </a>
      ))}
    </div>
  );
}
