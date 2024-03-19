/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(8 51 68)', // normal shade of primary
          light: 'rgb(253 224 71)', // lighter shade of primary
          dark: 'rgb(202 138 4)', // darker shade of primary
        },
        secondary: {
          DEFAULT: 'rgb(15 23 42)', // normal shade of secondary
          light: 'rgb(30 41 59)', // lighter shade of secondary
          dark: 'rgb(2 6 23)', // darker shade of secondary
        },
      },
      textColor: {
        primary: {
          DEFAULT: 'rgb(8 51 68)', // normal shade of primary
          light: 'rgb(254 252 232)', // lighter shade of primary
          dark: 'rgb(250 204 21)', // darker shade of primary
        },
        secondary: {
          DEFAULT: 'rgb(12 74 110)', // normal shade of secondary
          light: 'rgb(3 105 161)', // lighter shade of secondary
          dark: 'rgb(8 47 73)', // darker shade of secondary
        },
      },
      extend: {
        animation: {
          'float-in': 'float-in 2s ease-out',
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

