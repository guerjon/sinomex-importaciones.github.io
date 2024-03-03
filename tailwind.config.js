/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(251 191 36)', // normal shade of primary
          light: 'rgb(253 230 138)', // lighter shade of primary
          dark: 'rgb(245 158 11)', // darker shade of primary
        },
        secondary: {
          DEFAULT: 'rgb(15 23 42)', // normal shade of secondary
          light: 'rgb(30 41 59)', // lighter shade of secondary
          dark: 'rgb(2 6 23)', // darker shade of secondary
        },
      },
      textColor: {
        primary: {
          DEFAULT: 'rgb(254 240 138)', // normal shade of primary
          light: 'rgb(254 252 232)', // lighter shade of primary
          dark: 'rgb(250 204 21)', // darker shade of primary
        },
        secondary: {
          DEFAULT: 'rgb(12 74 110)', // normal shade of secondary
          light: 'rgb(3 105 161)', // lighter shade of secondary
          dark: 'rgb(8 47 73)', // darker shade of secondary
        },
      },
    },
  },
  plugins: [],
}

