// src/app/page.tsx
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/about/AboutSection";
import ResourcesSection from "@/components/sections/Resources";
// Agar Contact bo‘limingiz bo‘lmasa, importni va JSXni olib tashlang yoki keyin qo‘shasiz:
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Hero bo‘limingiz alohida bo‘lsa, shu yerga qo‘ying (ixtiyoriy) */}
      {/* <Hero /> */}

      <section id="about">
        <AboutSection />
      </section>

      <section id="resources">
        <ResourcesSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
