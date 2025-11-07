// src/app/page.tsx
import Hero from "@/components/Hero";
import AboutSection from "@/components/about/AboutSection";
import Features from "@/components/Features";     // 3-rasmdagi "Why students love"
import Contact from "@/components/Contact";       // 4-rasm form
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <main className="uh-bg">
        {/* 1) HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* 2) ABOUT (karusel + markaziy sarlavha) */}
        <section id="about">
          <AboutSection />
        </section>

        {/* 3) WHY STUDENTS LOVE (sizning Features komponentingiz) */}
        <section id="resources" className="scroll-mt-20">
          <Features />
        </section>

        {/* 4) CONTACT (form) */}
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}
