/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        amiri: ['Amiri', 'serif'],
        frank: ['Frank Ruhl Libre', 'serif'],
      },
    },
  },
  plugins: [],
};
