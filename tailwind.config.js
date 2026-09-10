/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
      animation: {
        'fade-in-cima': 'fadeInCima 0.7s ease-out forwards',
        'fade-in-baixo': 'fadeInBaixo 0.7s ease-out forwards',
        'fade-in-esquerda': 'fadeInEsquerda 0.7s ease-out forwards',
        'fade-in-direita': 'fadeInDireita 0.7s ease-out forwards',
        'balanco': 'balanco 3s ease-in-out infinite',
        'pulso-suave': 'pulsoSuave 2s ease-in-out infinite',
        'girar': 'girar 1s linear infinite',
      },
      keyframes: {
        fadeInCima: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInBaixo: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInEsquerda: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInDireita: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        balanco: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulsoSuave: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        girar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
