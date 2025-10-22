// Central brand & assets config for UniHero

export const BRAND = {
  name: "UniHero",
  tagline: "For Students, By Students",
  domain: "unihero.uz",

  // Assets (all stored in /public/brand)
  assets: {
    logoLight: "/brand/logo-light.png",   // main light logo
    logoDark: "/brand/logo-dark.png",     // dark-mode logo
    wordmark: "/brand/wordmark.png",      // optional horizontal wordmark
    hero: "/brand/hero.jpg",              // homepage hero/banner
    og: "/opengraph-image.png",           // OpenGraph preview (1200×630)
    favicon: "/brand/favicon.png",        // browser/tab icon
  },

  // Global animation controls
  enableAnimations: true,
  defaultRevealMs: 0.35,

  // Text snippets for auto-injection or codemods
  prompts: {
    productName: "UniHero",
    shortDescription: "For Students, By Students",
    longDescription:
      "UniHero is a community platform that helps university students find resources, prepare for exams, and stay motivated.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Learn More",
  },
} as const;
