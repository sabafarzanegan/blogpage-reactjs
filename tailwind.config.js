/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["vazir", "sans-serif"],
        lalezar: ["lalezar", "sans-serif"],
      },
    },
  },
  plugins: [],
};
