// src/app/page.tsx
import Navbar from "../components/Navbar";
// Alias bilan muammo bo‘lmasligi uchun RELATIV import:
import AboutSection from "../components/about/AboutSection";
import ResourcesSection from "../components/sections/Resources";
// Agar Contact bor bo‘lsa shu importni qoldiring, bo‘lmasa olib tashlang:
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Hero bo‘limingiz bo‘lmasa, tashlab ketavering */}
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
