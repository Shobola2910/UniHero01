export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[12px] px-3 py-1 rounded-full
                     bg-brand-900/60 text-brand-100 border border-white/10">
      {children}
    </span>
  );
}
