/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#214433',
          light: '#2c5a44',
          dark: '#1a3629',
        },
        accent: {
          orange: {
            DEFAULT: '#D06224',
            dark: '#AE431E',
          },
          gold: '#8A8635',
          cream: '#EAC891',
        },
        natural: {
          100: '#f8f5f0',
          200: '#f0ebe0',
          300: '#e8e0d0',
          400: '#d8cfc0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to right, rgba(33, 68, 51, 0.9), rgba(33, 68, 51, 0.5))',
        'accent-gradient': 'linear-gradient(to right, #D06224, #EAC891)',
      },
    },
  },
  plugins: [],
};