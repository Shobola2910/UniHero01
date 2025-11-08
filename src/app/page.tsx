import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="uh-bg min-h-dvh text-white">
      <Navbar />
      <Hero />
      {/*
        NOTE:
        - About & Resources sections intentionally NOT imported to avoid the
          previous build error "Can't resolve '@/components/about/AboutSection'".
        - When you add those components later, import them here like this:
            import AboutSection from "@/components/about/AboutSection";
            import ResourcesSection from "@/components/sections/Resources";
          and then render:
            <AboutSection />
            <ResourcesSection />
      */}
    </main>
  );
}
