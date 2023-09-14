/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#D9D9D9',
        'blueish-white': '#F7F7FB',
        'primary-color': '#2C4094',
        'black': '#000000',
        'white': '#ffffff',
        'transparent-blue': '#EBEDF5',
        'red': '#C12929',
        'darkGray': '#c3c3e1'
      },
      
      screens: {
        'mo-xs': '0px',
        'mo-sm': '350px',
        'mo-md': '475px',
        'mo-lg': '576px'
      },

      backgroundImage: {
        'login-bg': "url('../public/assets/bg.png')"
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.truncate-text': {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}
