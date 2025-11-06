// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 text-sm text-zinc-400 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} UniHero</p>
        <p>2024 - Oct • 2024 - Dec • 2025 - May</p>
      </div>
    </footer>
  );
}
