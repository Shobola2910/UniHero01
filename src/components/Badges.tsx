// src/components/Badges.tsx
export default function Badges() {
  const items = [
    { emoji: "👨🏻‍💻", text: "2 Anonym Founders" },
    { emoji: "🤖",     text: "Bot Created" },
    { emoji: "🏆",     text: "180+ Success" },
  ];
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {items.map((i) => (
        <div
          key={i.text}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
        >
          <span className="mr-1">{i.emoji}</span>
          {i.text}
        </div>
      ))}
    </div>
  );
}
