import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-10 md:py-16">
      <div className="uh-card p-6 md:p-10 text-brand-100">
        <div className="mb-4">
          <Badge>✨ For Students, By Students</Badge>
        </div>


        <p className="mt-4 max-w-2xl text-brand-100/90">
          Practical resources, a helpful community, and simple tools. Learn smarter with
          study guides, templates and quick support.
        </p>

        <div className="mt-6 flex gap-3">
          <a href="https://t.me/UniHero_news" target="_blank" rel="noreferrer">
            <Button>Join the Community</Button>
          </a>
          <a href="/about">
            <Button variant="secondary">Learn More</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
