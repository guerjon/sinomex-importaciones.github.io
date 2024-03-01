/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(254 240 138)', // normal shade of primary
          light: 'rgb(254 252 232)', // lighter shade of primary
          dark: 'rgb(250 204 21)', // darker shade of primary
        },
      },
      textColor: {
        primary: {
          DEFAULT: 'rgb(254 240 138)', // normal shade of primary
          light: 'rgb(254 252 232)', // lighter shade of primary
          dark: 'rgb(250 204 21)', // darker shade of primary
        },
      }
    },
  },
  plugins: [],
}

