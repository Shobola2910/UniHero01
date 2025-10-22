import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-6 md:py-12">
      <div className="uh-card p-4 sm:p-6 md:p-10 text-brand-100">
        <div className="mb-3 sm:mb-4">
          <Badge>✨ For Students, By Students</Badge>
        </div>

        <h1 className="text-[28px] leading-tight sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          UniHero — For Students, By Students
        </h1>

        <p className="mt-3 sm:mt-4 max-w-2xl text-brand-100/90 text-[15px] sm:text-base">
          Practical resources, a helpful community, and simple tools. Learn smarter with
          study guides, templates and quick support.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a href="https://t.me/UniHero_news" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">Join the Community</Button>
          </a>
          <a href="/about" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto">Learn More</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
