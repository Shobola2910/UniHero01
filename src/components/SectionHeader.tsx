// src/components/SectionHeader.tsx
export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-2">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      {subtitle && <p className="mt-1 text-white/70">{subtitle}</p>}
    </div>
  );
}
