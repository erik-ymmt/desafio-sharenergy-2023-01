/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [    
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    screens: {
      'max-2xl': {'max': '1536px'},
      'max-xl': {'max': '1280px'},
      'max-lg': {'max': '1024px'},
      'max-md': {'max': '768px'},
      'max-sm': {'max': '640px'},
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'se_green': '#00A2A2',
        'se_dark_green': '#177D7D',
        'se_bg': '#F4F7FA'
      },
      backgroundImage: {
        'solar1': "url('/src/assets/pexels-solar-panels-1.jpg')",
        'solar2': "url('/src/assets/pexels-solar-panels-2.jpg')",
        'solar3': "url('/src/assets/pexels-solar-panels-3.jpg')",
      },
      fontFamily: {
        'sans': ['Roboto', "Segoe UI", "Helvetica Neue", "Arial", "Noto Sans", 'sans-serif'],
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-in-out',
      },
      keyframes: {
        'slide-up': {
          '100%': { transform: 'translatey(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
