/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Alliance No. 2"', "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#6366f1",
          dark: "#4f46e5",
        },
        secondary: "#8b5cf6",
        accent: "#ec4899",
        background: "#0a0a0f",
        surface: "#111827",
        "surface-light": "#1f2937",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
        "gradient-surface": "linear-gradient(180deg, #111827 0%, #1f2937 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scroll: "scroll 25s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
