// src/app/about/page.tsx
import SectionHeader from "@/components/SectionHeader";
import TimelineAuto from "@/components/TimelineAuto";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 space-y-10">
      <SectionHeader
        title="Our Story"
        subtitle="Milestones from idea to impact"
      />

      <p className="text-white/80">
        UniHero is a student-first initiative built around practical resources,
        community support and smart tools. Below is our journey and growing
        milestones — continuously updated as we scale.
      </p>

      {/* ⭐ Auto-sliding timeline */}
      <TimelineAuto />

      <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
        <h3 className="mb-2 text-xl font-semibold">What&apos;s next?</h3>
        <p className="text-white/70">
          We are expanding resources, events and lightweight tools to help
          students learn faster. If you want to collaborate or contribute,
          reach us via{" "}
          <a className="underline" href="https://t.me/UniHero_admin" target="_blank">
            Telegram
          </a>.
        </p>
      </div>
    </div>
  );
}
