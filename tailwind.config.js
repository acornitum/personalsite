/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cmykMag: '#FF10AE',
        cmykBlue: '#48BDFF',
        cmykYel: '#ECFF10'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}