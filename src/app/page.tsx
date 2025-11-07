import Navbar from "@/components/Navbar";
import AboutSection from "@/components/about/AboutSection";
import ResourcesSection from "@/components/sections/Resources";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="home" className="uh-bg min-h-screen pb-16">
        {/* Heroingiz… (mavjud qismni qoldiring) */}

        <AboutSection />
        <ResourcesSection />
        <ContactSection />
      </main>
    </>
  );
}
