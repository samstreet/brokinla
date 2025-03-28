/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'brand-primary': '#4A90E2',
          'brand-secondary': '#F5A623',
          'brand-background': '#F7F9FC',
          'brand-text': '#333333',
        },
        fontFamily: {
          'sans': ['Montserrat', ...fontFamily.sans],
        },
        backgroundImage: {
          'gradient-primary': 'linear-gradient(135deg, #4A90E2 0%, #6D41D0 100%)',
        },
        boxShadow: {
          'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
        keyframes: {
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
        animation: {
          'fade-in': 'fade-in 0.5s ease-out',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }