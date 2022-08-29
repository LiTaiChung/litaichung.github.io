/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'top': 'top',
      }
    },
    // screens: {
    //   // '2xl': {'max': '1535px'},
    //   // 'xl': {'max': '1279px'},
    //   // 'lg': {'max': '1023px'},
    //   // 'md': {'max': '767px'},
    //   // 'sm': {'max': '639px'},
    // }
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('data-active', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`data-active${separator}${className}`)}[data-active="true"]`;
        })
      });
    })
  ],
}
