// src/app/resources/page.tsx
import SectionHeader from "@/components/SectionHeader";
import ResourcesGrid from "@/components/ResourcesGrid";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 space-y-8">
      <SectionHeader
        title="Explore Our Resources"
        subtitle="Everything you need to study smarter"
      />

      {/* Dekorativ ramka (bir oz ichkarida, yumaloq burchak, gradient ring) */}
      <div className="relative rounded-[28px] bg-white/[0.03] p-4 md:p-6 ring-1 ring-white/10">
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
        <ResourcesGrid />
      </div>
    </div>
  );
}
