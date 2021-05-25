const colors = require('tailwindcss/colors')
module.exports = {
  mode:'jit',
  purge: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{...colors},
    extend: {
      fontFamily:{
        jetMono : 'JetBrains Mono, monospace' ,
        round: 'Nova Round, cursive'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
