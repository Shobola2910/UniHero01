// Central brand & assets config for UniHero

export const BRAND = {
  name: "UniHero",
  tagline: "Resources and tools for students",
  domain: "unihero.uz",

  // Assets (local to /public)
  assets: {
    logoLight: "/brand/logo.svg",
    logoDark: "/brand/logo-dark.svg",
    wordmark: "/brand/wordmark.svg", // optional
    hero: "/brand/hero.jpg",
    og: "/brand/og.png",
    favicon: "/brand/favicon.png",
  },

  // Controls
  enableAnimations: true, // flip to false to disable all framer-motion animations
  defaultRevealMs: 0.35,

  // Prompt/text replacements (used by the codemod script)
  prompts: {
    productName: "UniHero",
    shortDescription: "Study smarter with UniHero.",
    longDescription:
      "UniHero helps students discover resources, manage tasks, and stay motivated.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Learn More",
  },
} as const;

