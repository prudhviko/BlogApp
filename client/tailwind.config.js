/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#f7f7f7", // Light gray for backgrounds
          DEFAULT: "#cccccc", // Standard gray for borders or text
          dark: "#666666", // Dark gray for text or accents
        },
        white: "#ffffff", // Pure white for contrast
      },
    },
  },
  plugins: [],
};
