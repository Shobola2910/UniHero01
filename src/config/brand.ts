export const BRAND = {
  name: "UniHero",
  tagline: "For Students, By Students",
  domain: "unihero.uz",
  colors: {
    primary: "#021024",
    navy: "#052659",
    steel: "#5483B3",
    lightSteel: "#7DA0CA",
    powder: "#C1E8FF",
  },
  assets: {
    logoLight: "/brand/logo-light.png",
    logoDark: "/brand/logo-dark.png",
    wordmark: "/brand/wordmark.png",
    hero: "/brand/hero.jpg",
    og: "/opengraph-image.png",
    favicon: "/brand/favicon.png",
  },
  gradients: {
    hero: "bg-hero-gradient",
    card: "bg-card-gradient",
  },
  enableAnimations: true,
  defaultRevealMs: 0.35,
} as const;
