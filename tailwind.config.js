/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
    theme: {
      extend: {
        colors: {
          gold: {
            50: '#F9F8F1',      
            100: '#EDEAD5',
            200: '#E1DCBA',
            300: '#D5CE9F',
            400: '#C9C083',
            500: '#C4b976',
            600: '#B0A66A',
            700: '#898152',
            800: '#625C3B',
            900: '#3A3723',
            950: '#13120B'
          },
        },
      },
    },
  plugins: [],
};
