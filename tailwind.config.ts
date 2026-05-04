import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#080810",
        surface: "#0E0E1A",
        panel: "#13131F",
        border: "#1C1C2E",
        "border-bright": "#2A2A45",
        accent: {
          DEFAULT: "#F97316",
          dim: "#C2570F",
          glow: "rgba(249,115,22,0.15)",
        },
        cyan: {
          DEFAULT: "#06B6D4",
          dim: "#0891B2",
          glow: "rgba(6,182,212,0.12)",
        },
        ink: {
          DEFAULT: "#E2E8F0",
          muted: "#94A3B8",
          faint: "#475569",
        },
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(28,28,46,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(28,28,46,0.5) 1px, transparent 1px)",
        "noise": "url('/noise.png')",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scan": "scan 3s ease-in-out infinite",
        "blink": "blink 1.2s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      boxShadow: {
        "accent": "0 0 40px rgba(249,115,22,0.2)",
        "cyan": "0 0 40px rgba(6,182,212,0.15)",
        "panel": "0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
