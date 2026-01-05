/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
        },
        secondary: {
          500: '#a855f7',
          600: '#9333ea',
        },
        accent: {
          500: '#f97316',
        },
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}

