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
        brand: {
          blue: "#1A6FD6",
          "blue-dark": "#0D4B9E",
          "blue-light": "#3B8EE8",
          gold: "#F5A623",
          "gold-light": "#FFD166",
          "gold-dark": "#D4881A",
          dark: "#050A14",
          "dark-2": "#0A1628",
          "dark-3": "#0F1E38",
          "dark-4": "#162540",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #050A14 0%, #0A1628 50%, #0D1B36 100%)",
        "gold-gradient": "linear-gradient(135deg, #F5A623 0%, #FFD166 50%, #D4881A 100%)",
        "blue-gradient": "linear-gradient(135deg, #1A6FD6 0%, #3B8EE8 50%, #0D4B9E 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(26, 111, 214, 0.4), 0 0 60px rgba(26, 111, 214, 0.1)",
        "glow-gold": "0 0 30px rgba(245, 166, 35, 0.4), 0 0 60px rgba(245, 166, 35, 0.1)",
        "glow-sm-blue": "0 0 15px rgba(26, 111, 214, 0.3)",
        "glow-sm-gold": "0 0 15px rgba(245, 166, 35, 0.3)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "slide-up": "slideUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        "particle-float": "particleFloat 15s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(26, 111, 214, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(26, 111, 214, 0.7), 0 0 80px rgba(26, 111, 214, 0.3)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideUp: {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        particleFloat: {
          "0%": { transform: "translateY(100vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100px) rotate(720deg)", opacity: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
