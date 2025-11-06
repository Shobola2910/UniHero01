// src/app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Resources from "../components/Resources";
import Contact from "../components/Contact";
import Footer from "../components/Footer"; // Agar sizda SiteFooter bor bo'lsa, shuni import qiling

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />        {/* #home */}
        <Features />    {/* #about */}
        <Resources />   {/* #resources */}
        <Contact />     {/* #contact */}
      </main>
      <Footer />
    </>
  );
}
