import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-cal-sans)", "var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        brand: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        accent: {
          DEFAULT: "#00D46A",
          dark:    "#00B558",
          light:   "#7EEDB4",
        },
        dark: {
          DEFAULT: "#0A0F0D",
          card:    "#111914",
          border:  "#1E2B22",
          muted:   "#6B8070",
        },
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(ellipse 80% 60% at 50% -10%, #00D46A22 0%, transparent 70%)",
        "card-glow":   "radial-gradient(circle at 50% 0%, #00D46A14 0%, transparent 60%)",
        "noise":       "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up":      "fadeUp 0.6s ease both",
        "fade-in":      "fadeIn 0.5s ease both",
        "slide-in-left": "slideInLeft 0.6s ease both",
        "float":        "float 6s ease-in-out infinite",
        "pulse-glow":   "pulseGlow 3s ease-in-out infinite",
        "ticker":       "ticker 30s linear infinite",
        "border-beam":  "borderBeam 4s linear infinite",
      },
      keyframes: {
        fadeUp:      { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:      { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideInLeft: { "0%": { opacity: "0", transform: "translateX(-24px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        float:       { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-16px)" } },
        pulseGlow:   { "0%,100%": { boxShadow: "0 0 20px #00D46A33" }, "50%": { boxShadow: "0 0 60px #00D46A66" } },
        ticker:      { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        borderBeam:  { "0%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0% 50%" } },
      },
      boxShadow: {
        "glow-sm": "0 0 20px #00D46A22",
        "glow-md": "0 0 40px #00D46A33",
        "glow-lg": "0 0 80px #00D46A44",
        "card":    "0 4px 32px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
