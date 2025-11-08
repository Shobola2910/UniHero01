// src/app/page.tsx

import Hero from "@/components/Hero";
import AboutSection from "@/components/about/AboutSection";

// Agar siz Resources komponentini `src/components/sections/Resources.tsx` ga qo‘ygan bo‘lsangiz — shu importni qoldiring:
import ResourcesSection from "@/components/sections/Resources";

// Agar Resources `src/components/Resources.tsx` da bo‘lsa, yuqoridagi import o‘rniga quyidagini yoqing:
// import ResourcesSection from "@/components/Resources";

// Contact bo‘limi bor bo‘lsa qoldiring, bo‘lmasa bu importni va <ContactSection /> ni olib tashlang
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

      {/* Contact bo‘limingiz bo‘lmasa, quyidagini o‘chirib tashlang */}
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
