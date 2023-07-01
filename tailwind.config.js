/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "xxs": "0.65rem"
      },
    
      maxWidth: {
        "xxs": "16rem"
      },

      boxShadow: {
        'top': '0 0 30px -7px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
