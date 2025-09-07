/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#8B5CF6",      // violet-500/600 vibe
          dark: "#7C3AED"
        },
        secondary: "#3B82F6"       // blue-500
      },
      backgroundImage: {
        "radiance":
          "radial-gradient(1200px 600px at 20% 10%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(900px 500px at 80% 0%, rgba(59,130,246,0.20), transparent 60%), radial-gradient(700px 400px at 50% 100%, rgba(139,92,246,0.15), transparent 60%)"
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        glowpulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(139,92,246,0.35)" },
          "50%": { boxShadow: "0 0 40px 8px rgba(139,92,246,0.35)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        glowpulse: "glowpulse 3s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}
