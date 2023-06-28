/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'top': '0 0 30px -7px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
