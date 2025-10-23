import AboutTimeline from "@/components/AboutTimeline";

const items = [
  { emoji: "🤖", date: "2024 · Dec", title: "UniHero Bot created", src: "/about/bot-created.png" },
  { emoji: "🧑‍🤝‍🧑", date: "2024 · Oct", title: "2 anonym founders", src: "/about/2-founders.png" },
  { emoji: "🧠", date: "2025 · Mar", title: "Focused more on AI detectors and integrations", src: "/about/ai-detectors.png" },
  { emoji: "🎉", date: "2025 · May", title: "180 + students success", src: "/about/180-students.png" },
  { emoji: "📥", date: "2025 · June", title: "UniHero Bot 200+ users", src: "/about/bot-200-users.png" },
];

export default function AboutPage() {
  return (
    <main className="min-h-dvh">
      <AboutTimeline items={items} />
      {/* Keyinchalik pastiga qo'shimcha kontent qo'shsak ham, tepasi mustaqil ishlaydi */}
    </main>
  );
}
