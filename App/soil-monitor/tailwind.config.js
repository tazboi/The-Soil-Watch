/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4rem': '4rem',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        amiri: ['Amiri', 'serif'],
        frank: ['Frank Ruhl Libre', 'serif'],
      },
    },
  },
  plugins: [],
};
