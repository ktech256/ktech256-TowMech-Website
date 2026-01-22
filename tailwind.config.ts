import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07090d",
        midnight: "#0b0f1f",
        primary: "#0033A0",
        accent: "#007A3D",
        glow: "#f7931a",
      },
      boxShadow: {
        glow: "0 0 25px rgba(0, 51, 160, 0.35)",
        accent: "0 0 30px rgba(0, 122, 61, 0.35)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top, rgba(0, 51, 160, 0.35), transparent 55%), radial-gradient(circle at 70% 30%, rgba(0, 122, 61, 0.25), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
