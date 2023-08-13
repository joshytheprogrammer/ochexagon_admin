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
      'white': '#ffffff'
    }
  },
  plugins: [],
}
