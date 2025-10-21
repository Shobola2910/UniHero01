export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4 py-6 text-sm text-white/70 flex items-center justify-between">
        <span>© {new Date().getFullYear()} UniHero — For Students, By Students</span>
        <span className="text-white/50">Built with Next.js</span>
      </div>
    </footer>
  );
}
