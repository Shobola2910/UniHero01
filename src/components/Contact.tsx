// src/components/Contact.tsx
"use client";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      username: (form.elements.namedItem("username") as HTMLInputElement)?.value,
      comment: (form.elements.namedItem("comment") as HTMLTextAreaElement)?.value,
    };
    try {
      setLoading(true);
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setOk(res.ok);
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold">Contact</h2>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:max-w-xl">
          <label className="grid gap-1">
            <span className="text-sm text-zinc-300">Full Name</span>
            <input
              required
              name="name"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-zinc-300">Telegram User</span>
            <input
              required
              name="username"
              placeholder="@username"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-zinc-300">Comment</span>
            <textarea
              name="comment"
              rows={4}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </label>
          <div className="flex items-center gap-3">
            <button
              disabled={loading}
              className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500 disabled:opacity-50"
              type="submit"
            >
              {loading ? "Sending..." : "Send to Telegram"}
            </button>
            {ok === true && <span className="text-green-400">Sent ✅</span>}
            {ok === false && <span className="text-red-400">Failed ❌</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
