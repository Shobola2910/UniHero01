export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-12 bg-transparent text-brand-100">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div className="font-semibold">UniHero</div>
        <p className="text-sm opacity-80">For Students, By Students</p>
        <p className="text-xs md:text-right opacity-70">
          © {new Date().getFullYear()} UniHero. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
