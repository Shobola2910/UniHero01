"use client";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", username: "", comment: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const r = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const j = await r.json();
      alert(j?.ok ? "Yuborildi ✅" : "Xatolik ❌");
      if (j?.ok) setForm({ name: "", username: "", comment: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
          <img src="/brand/unihero-large.jpg" alt="" className="h-full w-full object-cover" />
        </div>

        <div>
          <div className="mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-full border-4 border-white">
            <img src="/brand/logo-dark.png" alt="UniHero" className="h-20 w-20" />
          </div>

          <form className="space-y-4" onSubmit={submit}>
            <input value={form.name} onChange={e=>setForm(s=>({ ...s, name: e.target.value }))}
              type="text" placeholder="Full Name"
              className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/60 focus:outline-none" />
            <input value={form.username} onChange={e=>setForm(s=>({ ...s, username: e.target.value }))}
              type="text" placeholder="Telegram User"
              className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/60 focus:outline-none" />
            <textarea value={form.comment} onChange={e=>setForm(s=>({ ...s, comment: e.target.value }))}
              rows={6} placeholder="Comment"
              className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/60 focus:outline-none" />
            <button type="submit" className="uh-btn" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="uh-pill" href="https://t.me/UniHero_news" target="_blank">📣 UniHero_News</a>
            <a className="uh-pill" href="https://t.me/UniHero_BOT"   target="_blank">🤖 UniHero BOT</a>
            <a className="uh-pill" href="https://t.me/Unihero_admin" target="_blank">👨🏻‍💻 Admin</a>
          </div>
        </div>
      </div>
    </section>
  );
}
