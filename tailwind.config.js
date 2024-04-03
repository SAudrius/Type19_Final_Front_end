/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '555px',
      md: '768px',
      lg: '1000px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
      },
      screens: {
        sm: '700px',
        md: '920px',
        lg: '1140px',
        xl: '1260px',
      },
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#432432',
        secondary: '#F39316',
      },
    },
  },
  plugins: [],
};
