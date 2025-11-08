"use client";
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="uh-card rounded-3xl bg-[#0b274a]/85 p-6 md:p-8">
        {/* Tag */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
          <span>✨</span>
          <span>For Students, By Students</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
          UniHero — For Students, By Students
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-3xl text-white/85">
          Practical resources, a helpful community, and simple tools. Learn smarter with study
          guides, templates and quick support.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="https://t.me/UniHero_news"
            target="_blank"
            className="rounded-xl bg-[#26658C] px-5 py-3 font-bold text-white hover:bg-[#2d7099]"
          >
            Join the Community
          </a>

          <Link
            href="#about"
            className="rounded-xl border border-white/20 px-5 py-3 font-bold text-white hover:bg-white/10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
