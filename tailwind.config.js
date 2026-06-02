/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0f0e0d',
          50: '#f5f4f2',
          100: '#e8e6e1',
          200: '#d1cdc4',
          300: '#b3ad9f',
          400: '#8f887a',
          500: '#736c5e',
          600: '#5c564a',
          700: '#47423a',
          800: '#2e2a24',
          900: '#1a1814',
        },
        sage: {
          DEFAULT: '#4a7c59',
          50: '#f0f7f2',
          100: '#d9eede',
          200: '#b3dcbc',
          300: '#7ec194',
          400: '#4a7c59',
          500: '#3a6347',
          600: '#2e4f38',
          700: '#253e2c',
          800: '#1c2e21',
          900: '#131e17',
        },
        amber: {
          custom: '#c9892a',
          light: '#f5e6c8',
        },
        rose: {
          custom: '#c94a4a',
          light: '#f5d4d4',
        },
        cream: '#faf8f4',
        parchment: '#f0ece4',
      },
    },
  },
  plugins: [],
}
