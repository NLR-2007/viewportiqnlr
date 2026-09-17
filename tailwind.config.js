/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F8F9FA",
        card: "#FFFFFF",
        "card-border": "#E2E8F0",
        ink: "#0F172A",
        "ink-muted": "#64748B",
      },
      fontFamily: {
        geist: ["Geist", "Inter", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
        newsreader: ["Newsreader", "Georgia", "serif"],
      },
      boxShadow: {
        'light-card': '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'light-hover': '0 10px 30px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
