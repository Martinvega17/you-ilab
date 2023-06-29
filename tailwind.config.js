/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      colors: {
        'azul-claro': '#d1e1f4',
        'negro-claro': '#444C59',
        'azul-dark': '#03045e',
        'azul-footer': '#114d97',
        'div-azul': '#1E6091'
      },
    },
  },
  plugins: [],
}
