import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0e0e0e",
        ivory: "#e5e2e1",
        brass: "#e9c176",
        reef: "#444748",
        ember: "#c6c7c2",
        surface: "#141313",
        "surface-lowest": "#0e0e0e",
        "surface-low": "#1c1b1b",
        "surface-container": "#201f1f",
        "surface-high": "#2b2a2a",
        "studio-outline": "#444748",
        "muted-studio": "#c5c7c2",
        "charcoal-depth": "#121212",
        "tertiary-gold": "#e9c176"
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "Arial Narrow", "sans-serif"],
        body: ["var(--font-hanken)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Consolas", "monospace"],
        accent: ["var(--font-permanent-marker)", "Impact", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
