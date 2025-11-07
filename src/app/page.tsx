import Hero from "@/components/Hero";
// OLD: import AboutSection from "@/components/about/AboutSection";
import AboutSection from "@/components/about/AboutCarousel"; // ⬅️ shu qilib qo'ying
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <main className="uh-bg">
        <section id="home"><Hero /></section>
        <section id="about"><AboutSection /></section>
        <section id="resources"><Features /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}
