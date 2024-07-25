/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        border: "shinyborder 4s linear infinite",
        blink: "cursorblink 1s steps(2) infinite",
      },

      keyframes: {
        shinyborder: {
          to: { "--border-angle": "360deg" },
        },
        cursorblink: {
          "0%": { opacity: 0 },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#b9dffe",
          300: "#7cc6fd",
          400: "#36aafa",
          500: "#0c8feb",
          600: "#0078d7",
          700: "#0159a3",
          800: "#064c86",
          900: "#0b406f",
          950: "#07284a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
