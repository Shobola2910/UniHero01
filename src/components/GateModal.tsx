"use client";
import { useEffect, useState } from "react";

declare global { interface Window { onTelegramAuth?: (user: any) => void } }

export default function GateModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Local cache: 24 soatga yodda saqlash
    const ok = localStorage.getItem("uh_gate_ok") === "1";
    if (!ok) setOpen(true);

    // Telegram Login callback
    window.onTelegramAuth = async (user) => {
      try {
        const r = await fetch("/api/telegram/check-membership", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user?.id }),
        });
        const j = await r.json();
        if (j?.ok) {
          localStorage.setItem("uh_gate_ok", "1");
          setOpen(false);
        } else {
          alert("Iltimos, avval @UniHero_news kanaliga a’zo bo‘ling!");
        }
      } catch {
        alert("Tekshiruvda xatolik. Keyinroq urinib ko‘ring.");
      }
    };
  }, []);

  if (!open) return null;

  const botName = process.env.NEXT_PUBLIC_TELEGRAM_LOGIN_BOT || "UniHero_BOT";

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
        <h3 className="text-2xl font-bold">Kanalga qo‘shiling</h3>
        <p className="mt-2 text-white/80">
          UniHero webdan foydalanishdan oldin <b>@UniHero_news</b> kanaliga a’zo bo‘ling.
          So‘ng Telegram bilan tasdiqlang.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href="https://t.me/UniHero_news"
            target="_blank"
            className="uh-btn"
          >
            📣 Join UniHero_News
          </a>
          <span className="text-white/70">→ so‘ng Telegram bilan tasdiqlang:</span>
        </div>

        {/* Telegram Login Widget */}
        <div className="mt-4">
          <script
            async
            src="https://telegram.org/js/telegram-widget.js?22"
            data-telegram-login={botName}
            data-size="large"
            data-userpic="false"
            data-onauth="onTelegramAuth(user)"
            data-request-access="write"
          />
        </div>
      </div>
    </div>
  );
}
