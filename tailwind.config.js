/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {center: true,},
    extend: {
      colors: {
        pblack: "#160051",
       pblue: "#143d59",
       pviolet: "#e758d4",
      },
    },
  },
  plugins: [],
}
