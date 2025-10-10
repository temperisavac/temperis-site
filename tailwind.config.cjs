/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: {50:'#eef7ff', 600:'#0284c7', 700:'#0369a1'} },
      fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] }
    },
  },
  plugins: [],
}
