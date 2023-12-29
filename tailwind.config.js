/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#96b15d',
      'secondary': '#c9ff58'
    },
    extend: {
      fontFamily: {
        playpen: ["Playpen Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}