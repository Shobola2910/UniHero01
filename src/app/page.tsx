import GateModal from "@/components/GateModal";
import Hero from "@/components/Hero";
import AboutSection from "@/components/about/AboutSection";
import Features from "@/components/Features";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <main className="uh-bg">
        <GateModal /> {/* kanal gate */}
        <section id="home"><Hero /></section>
        <section id="about"><AboutSection /></section>
        <section id="resources"><Features /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
