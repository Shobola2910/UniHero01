// src/app/page.tsx
import Navbar from "../components/Navbar";
import AboutSection from "../components/about/AboutSection";
import ResourcesSection from "../components/sections/Resources";

// Agar sizda alohida ContactSection bo'lmasa, pastdagi ContactBlock ishlatiladi.
// import ContactSection from "../components/ContactSection";

function ContactBlock() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">Contact</h2>
      <p className="mt-2 text-white/80">
        Tezkor aloqa uchun Telegram orqali yozing:
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://t.me/UniHero_news"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 px-5 py-2.5 text-white hover:bg-white/20"
        >
          📣 UniHero_News
        </a>
        <a
          href="https://t.me/UniHero_BOT"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 px-5 py-2.5 text-white hover:bg-white/20"
        >
          🤖 UniHero BOT
        </a>
        <a
          href="https://t.me/Unihero_admin"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 px-5 py-2.5 text-white hover:bg-white/20"
        >
          👨🏻‍💻 Admin
        </a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="uh-bg min-h-screen text-white">
      {/* Navbar doimiy */}
      <Navbar />

      {/* ===== HERO (Home) ===== */}
      <section id="home" className="safe-pt mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              UniHero — <span className="text-white/90">For Students, By Students</span>
            </h1>
            <p className="mt-4 text-lg text-white/85">
              Assignments, exam prep, study guides va motivatsiya — bir joyda.
              Telegram bilan to‘liq integratsiya: hamjamiyat, bot va yangiliklar.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://t.me/UniHero_news"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/15 px-6 py-3 text-base font-semibold hover:bg-white/20"
                aria-label="Join the Community (UniHero News)"
              >
                Join the Community
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/20 px-6 py-3 text-base font-semibold hover:bg-white/10"
                aria-label="Learn more about UniHero"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* ixtiyoriy vizual / logo */}
          <div className="hidden md:block">
            <div
              className="mx-auto grid place-items-center rounded-3xl border border-white/10 bg-white/5 p-8"
              style={{ maxWidth: 520 }}
            >
              {/* Agar logoyingiz bo‘lsa: /brand/logo-light.png */}
              <img
                src="/brand/logo-light.png"
                alt="UniHero logo"
                className="h-28 w-28"
              />
              <p className="mt-4 text-center text-white/80">
                Hamjamiyatga qo‘shiling va resurslardan foydalaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about">
        <AboutSection />
      </section>

      {/* ===== RESOURCES ===== */}
      <section id="resources">
        <ResourcesSection />
      </section>

      {/* ===== CONTACT ===== */}
      <ContactBlock />
      {/* Agar alohida komponentingiz bo‘lsa, ContactBlock o‘rniga shuni qo‘ying:
          <ContactSection /> va tepadagi importni yoqing. */}
    </main>
  );
}
