/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'gray': '#D9D9D9',
      'blueish-white': '#F7F7FB',
      'primary-color': '#2C4094',
      'black': '#000000',
      'white': '#ffffff',
      'transparent-blue': 'EBEDF5'
    },

    extend: {
      screens: {
        'mo-xs': '0px',
        'mo-sm': '350px',
        'mo-md': '475px',
        'mo-lg': '576px'
      }
    }
  },
  plugins: [],
}
