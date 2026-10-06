/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Переключение темы через класс .dark на <html>
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        ink: '#0a0a0a',
      },
    },
  },
  plugins: [],
}
