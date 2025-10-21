// src/app/resources/page.tsx
import SectionHeader from "@/components/SectionHeader";
import ResourcesGrid from "@/components/ResourcesGrid";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 space-y-6">
      <SectionHeader title="Explore Our Resources" subtitle="Everything you need to study smarter" />
      <ResourcesGrid />
    </div>
  );
}
