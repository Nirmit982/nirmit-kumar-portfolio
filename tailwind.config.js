/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0C0E",
        surface: {
          DEFAULT: "#15171B",
          raised: "#1B1E23",
        },
        line: "rgba(255,255,255,0.08)",
        ink: {
          DEFAULT: "#EDEDEF",
          soft: "#B4B6BD",
          faint: "#75777E",
        },
        accent: {
          DEFAULT: "#E0964A",
          soft: "rgba(224,150,74,0.12)",
          line: "rgba(224,150,74,0.35)",
        },
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        blink: { "0%,49%": { opacity: 1 }, "50%,100%": { opacity: 0 } },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
