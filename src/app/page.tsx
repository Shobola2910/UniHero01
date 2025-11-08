// src/app/page.tsx

import Hero from "@/components/Hero";
import AboutSection from "@/components/about/AboutSection";
import ResourcesSection from "@/components/sections/Resources";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

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
