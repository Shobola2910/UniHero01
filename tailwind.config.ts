// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"], // sizdagi pathga moslang
  theme: {
    extend: {
      // 1) xs breakpoint (480px atrofida)
      screens: {
        xs: "480px",
      },
      // 2) brand rangiga 950 qo‘shib qo‘yamiz (Tailwind indigo-950 ga yaqin)
      colors: {
        brand: {
          50:  "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
          950: "#1E1B4B", // <-- qo'shildi
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(31,41,55,0.08)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
