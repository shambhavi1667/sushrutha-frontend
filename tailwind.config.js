/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D0B08',
        surface: '#1C1712',
        border: '#2E2820',
        turmeric: '#E8A020',
        sandalwood: '#C4845A',
        neem: '#4A7C59',
        kumkum: '#C0392B',
        cream: '#F5EDD6',
        muted: '#A89880',
        hint: '#6B5E50',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
}
