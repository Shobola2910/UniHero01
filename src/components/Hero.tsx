import { BRAND } from "@/config/brand";
import BrandImage from "@/components/BrandImage";
import { Reveal } from "@/components/Animated";

export default function Hero() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold">{BRAND.name}</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{BRAND.tagline}</p>
        <div className="mt-6 flex gap-3">
          <a href="/get-started" className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black">
            Get Started
          </a>
          <a href="/about" className="px-4 py-2 rounded-lg border">
            Learn More
          </a>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <BrandImage
          src={BRAND.assets.hero}
          alt={`${BRAND.name} hero`}
          width={1200}
          height={900}
          className="w-full h-auto"
        />
      </Reveal>
    </section>
  );
}
