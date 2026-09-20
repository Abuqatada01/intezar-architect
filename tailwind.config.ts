import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terascape: {
          blue: "#43729b",
          "blue-dark": "#315777",
          "blue-light": "#5485b0",
          dark: "#12161c",
          darker: "#0d1117",
          card: "#181d24",
          border: "rgba(255, 255, 255, 0.22)",
        },
        brand: {
          blue: "#0055ff",
          "blue-soft": "#e8f0fe",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
