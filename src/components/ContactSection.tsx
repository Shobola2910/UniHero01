"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Chap — katta app logo (7-rasm) */}
        <div className="flex items-center justify-center">
          <img
            src="/brand/unihero-app.png"   /* 7-rasmdagi faylni public/brand/unihero-app.png nomi bilan qo'ying */
            alt="UniHero App"
            className="max-h-[420px] w-auto rounded-[36px] shadow-[0_20px_60px_rgba(1,28,64,.45)]"
          />
        </div>

        {/* O‘ng — forma va havolalar */}
        <div>
          <div className="mx-auto grid max-w-xl gap-4">
            <div className="mx-auto mb-4 grid place-items-center rounded-full border-8 border-white/80 p-3">
              <img src="/brand/logo-light.png" alt="UniHero" className="h-20 w-20" />
            </div>

            <input className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/60" placeholder="Full Name" />
            <input className="rounded-2xl border border-white/15 bg:white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60" placeholder="Telegram User" />
            <textarea rows={6} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/60" placeholder="Comment" />

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a className="rounded-full bg-white/12 px-4 py-2 font-semibold text-white hover:bg-white/20" href="https://t.me/UniHero_news" target="_blank">📣 UniHero_News</a>
              <a className="rounded-full bg-white/12 px-4 py-2 font-semibold text-white hover:bg-white/20" href="https://t.me/UniHero_BOT" target="_blank">🤖 UniHero BOT</a>
              <a className="rounded-full bg-white/12 px-4 py-2 font-semibold text-white hover:bg-white/20" href="https://t.me/Unihero_admin" target="_blank">👨🏻‍💻 Admin</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
