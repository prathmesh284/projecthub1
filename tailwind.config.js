/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tx,js,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

