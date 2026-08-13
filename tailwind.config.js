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
        upa: {
          pink: '#E91E8C',      // Rosa UPA
          lime: '#00FF00',      // Verde lima UPA
          lightpink: '#FFB6D9',
          darkpink: '#C71566',
        },
        usa: {
          red: '#B22234',
          blue: '#3C3B6B',
          white: '#FFFFFF',
        },
        spain: {
          red: '#AA151B',
          yellow: '#FFC400',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
