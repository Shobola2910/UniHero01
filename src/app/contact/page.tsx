// src/app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(body) });
      if (!res.ok) throw new Error();
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-white/80">We’ll get back to you quickly.</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
        <input name="name" placeholder="Your name" className="w-full rounded-xl bg-white/10 p-3 outline-none ring-1 ring-white/15" required />
        <input name="email" placeholder="Email" type="email" className="w-full rounded-xl bg-white/10 p-3 outline-none ring-1 ring-white/15" required />
        <textarea name="message" placeholder="Message" rows={5} className="w-full rounded-xl bg-white/10 p-3 outline-none ring-1 ring-white/15" required />
        <button className="rounded-xl bg-unihero-accent px-5 py-2.5 font-semibold">Send</button>
        {status === "sent" && <p className="text-emerald-300">Thanks! We’ll reply soon.</p>}
        {status === "error" && <p className="text-rose-300">Something went wrong. Try again.</p>}
      </form>
    </div>
  );
}
