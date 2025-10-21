// src/app/news/page.tsx
import news from "@/data/news.json";

type Item = { date: string; title: string; summary: string };

export default function NewsPage() {
  const items = (news as Item[]) ?? [];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">News</h1>

      {items.length === 0 ? (
        <p className="text-white/70">No news yet — check back soon.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((n, idx) => (
            <li
              key={`${n.date}-${idx}`}
              className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
            >
              <div className="text-sm text-white/70">{n.date}</div>
              <div className="mt-1 font-semibold">{n.title}</div>
              <p className="mt-1 text-white/80">{n.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
