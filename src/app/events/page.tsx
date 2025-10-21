// src/app/events/page.tsx
export default function EventsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-10 space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold">Events</h1>
      <p className="text-white/80">
        Post upcoming exams, deadlines, and community meetups here. (Static placeholder —
        swap with your data source or CMS later.)
      </p>
      <ul className="mt-2 space-y-2 text-white/85">
        <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">📅 Study sprint — Weekly Pomodoro, every Sat</li>
        <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">🧪 Exam prep Q&A — First week of month</li>
      </ul>
    </div>
  );
}
