import Image from "next/image";
import { BRAND } from "@/config/brand";

export default function Hero() {
  return (
    <section className="u-container py-10 md:py-16">
      <div className="rounded-2xl p-8 md:p-12 text-white bg-hero-gradient grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">UniHero</h1>
          <p className="mt-3 text-brand-100/90">For Students, By Students</p>
          <div className="mt-6 flex gap-3">
            <a href="/resources" className="px-4 py-2 rounded-lg bg-brand-100 text-brand-950 font-medium">
              Get Started
            </a>
            <a href="/about" className="px-4 py-2 rounded-lg border border-brand-100/60 text-brand-100">
              Learn More
            </a>
          </div>
        </div>
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-brand-900/40">
          <Image
            src={BRAND.assets.hero}
            alt="UniHero hero"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
