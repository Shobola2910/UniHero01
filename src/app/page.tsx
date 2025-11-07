// src/app/page.tsx
import Hero from "@/components/Hero";
import AboutCarousel from "@/components/about/AboutCarousel"; // <— AboutSection o‘rniga to‘g‘ridan-to‘g‘ri Carousel
import Features from "@/components/Features";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="uh-bg">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutCarousel />
      </section>

      <section id="resources">
        <Features />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
