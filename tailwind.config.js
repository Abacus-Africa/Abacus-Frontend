/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {center: true,},
    extend: {
      colors: {
        pblack: "#0E0033",
        pblue: "#160051",
        lightBlue: "#4B29A6",
        pviolet: "#e758d4",
        plightviolet: "#FFE2FF",
        pink: "#FCB5B5",
        gray: "#ECE5FF",
        lightGray: "#F6F2FF",
      },
    },
  },
  plugins: [],
}
