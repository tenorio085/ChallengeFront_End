/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-principal': '#2E7D32',
        'verde-claro': '#4CAF50',
        'verde-suave': '#81C784',
        'teal-destaque': '#009688',
        'marrom-terra': '#5D4037',
        'azul-ceu': '#03A9F4',
        'amarelo-sol': '#FFC107',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
