/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#ffffff",
        "background-secondary": "#1D1E25",
        "text": "#242D52",
        "accent": "#F3603C",
        "accent-secondary": "#1D1E25",
      }
    },
  },
  plugins: [],
}