/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playpen: ["Playpen Sans", "sans-serif"],
        courier: ["Courier New", "Courier", "monospace"],
      },
      colors: {
        'primary': '#96b15d',
        'secondary': '#c9ff58'
      },
      backgroundImage: {
        'gradient-radial': 'repeating-radial-gradient(circle at 0 0,#0000 0,#b9e160 40px),repeating-linear-gradient(#c9ff5855,#c9ff58);'
      }
    },
  },
  plugins: [],
}