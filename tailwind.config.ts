import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // UniHero brand (ko‘klar)
        brand: {
          950: "#021024",
          900: "#052659",
          600: "#5483B3",
          400: "#7DA0CA",
          100: "#C1E8FF",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #021024 0%, #052659 45%, #5483B3 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(2,16,36,.06), rgba(2,16,36,.12))",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,16,36,.12)",
      },
      borderRadius: {
        "2xl": "16px",
      },
    },
  },
  plugins: [],
} satisfies Config;
