/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'Light-Cyan': 'hsl(193, 38%, 86%)',
      'Neon-Green': 'hsl(150, 100%, 66%)',
      'Grayish-Blue': 'hsl(217, 19%, 38%)',
      'Dark-Grayish-Blue': 'hsl(217, 19%, 24%)',
      'Dark-Blue': 'hsl(218, 23%, 16%)'
    },
    fontFamily: {
      'Manrop' : 'Manrope'
    },
    screens: {
      'mobile': {'max': '480px'},
      'desktop': {'min': '1240px'}
    }
  },
  plugins: [],
}