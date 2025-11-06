// src/app/page.tsx
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
