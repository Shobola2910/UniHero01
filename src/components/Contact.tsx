// src/components/Contact.tsx
export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left big image */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
          <img
            src="/brand/unihero-large.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right form */}
        <div>
          <div className="mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-full border-4 border-white">
            <img src="/brand/logo-dark.png" alt="UniHero" className="h-20 w-20" />
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/60 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Telegram User"
              className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/60 focus:outline-none"
            />
            <textarea
              rows={6}
              placeholder="Comment"
              className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/60 focus:outline-none"
            />
            <button type="submit" className="uh-btn w-full md:w-auto">
              Send
            </button>
          </form>

          {/* Bottom pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="uh-pill" href="https://t.me/UniHero_News" target="_blank">
              📣 UniHero_News
            </a>
            <a className="uh-pill" href="https://t.me/UniHero_BOT" target="_blank">
              🤖 UniHero BOT
            </a>
            <a className="uh-pill" href="mailto:admin@unihero.uz">
              👨🏻‍💻 Admin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
