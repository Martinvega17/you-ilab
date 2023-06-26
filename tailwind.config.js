/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,jsx}"
],
  theme: {
    extend: {
      colors: {
        'azul-claro': '#d1e1f4',
        'negro-claro': '#444C59',
        'azul-dark': '#03045e'
      },
    },
  },
  plugins: [],
}

