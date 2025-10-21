// src/app/about/page.tsx
import SectionHeader from "@/components/SectionHeader";
import AboutCarousel from "@/components/AboutCarousel";
import TimelineAuto from "@/components/TimelineAuto";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 space-y-10">
      <SectionHeader
        title="Our Story"
        subtitle="Milestones from idea to impact"
      />

      {/* ✅ Image slider (auto) */}
      <AboutCarousel
        intervalMs={4800} // biroz sekinroq aylansin
        slides={[
          {
            img: "/about/1.jpg",
            badge: "2024 · Oct",
            title: "2 anonymous founders",
            caption: "The UniHero idea turns into a student-first initiative.",
          },
          {
            img: "/about/2.jpg",
            badge: "2024 · Dec",
            title: "UniHero Bot created",
            caption: "Telegram bot for faster help and order management.",
          },
          {
            img: "/about/3.jpg",
            badge: "2025 · Mar",
            title: "More focus on AI tools",
            caption: "Detectors and smart utilities for students.",
          },
          {
            img: "/about/4.jpg",
            badge: "2025 · May",
            title: "100 students success",
            caption: "Growing impact with verified resources and support.",
          },
        ]}
      />

      <p className="text-white/80">
        UniHero is built around practical resources, community support, and
        simple tools. Below is our journey — continuously updated as we grow.
      </p>

      {/* ⭐ Auto-sliding timeline (o‘ngdan chapga, sekinroq) */}
      {/* TimelineAuto komponentingiz bunday propslarni qabul qilmasa – ichidagi configga o‘sha qiymatlarni qo‘ying */}
      <TimelineAuto direction="rtl" speed={0.6} />

      <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
        <h3 className="text-xl font-semibold mb-2">What&apos;s next?</h3>
        <p className="text-white/70">
          We’re expanding resources, events and lightweight tools to help
          students learn faster. If you’d like to collaborate or contribute,
          reach us via{" "}
          <a className="underline" href="https://t.me/UniHero_admin" target="_blank">
            Telegram
          </a>
          .
        </p>
      </div>
    </div>
  );
}
