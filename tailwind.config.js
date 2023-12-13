/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#008aff',
        secondary: '#171347',
        primaryHover: '#269cff',
        dark: '#1f2d3d',
        darkBg: '#1c2836',
        darkCard: '#253649',
        grayBg: '#FAFBFE',
        light: '#ffffff',
      },
      fontSize: {
        '20xl': '7rem',
      },
      container: {
        center: true,

        screens: {
          xl: '1240px',
        },
      },
    },
  },
  plugins: [],
};
