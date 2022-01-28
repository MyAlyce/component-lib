/* eslint-disable */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.zinc,
        success: colors.green,
        info: colors.cyan,
        danger: colors.red,
        warning: colors.amber,
      }
    },
    minWidth: {
      '2': '0.25rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '12': '3rem',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['dark']
  }
};  
