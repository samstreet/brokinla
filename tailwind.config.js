/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
      colors: {
        'purple': '#6b4da3',
      },
    },
    plugins: [
      "@tailwindcss/postcss",
      "@tailwindcss/typography",
    ],
  }