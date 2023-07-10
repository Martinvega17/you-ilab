const plugin = require('tailwindcss/plugin');
const animatecss = require('tailwindcss-animatecss');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Rajdhani"],
        cera: ["Cera-Medium", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        'azul-claro': '#d1e1f4',
        'negro-claro': '#444C59',
        'azul-dark': '#03045e',
        'azul-footer': '#114d97',
        'div-azul': '#1E6091',
        'dark': '#111111'
      },
    },
  },
  plugins: [],
};
