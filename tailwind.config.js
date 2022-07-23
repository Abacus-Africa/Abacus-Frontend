/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {center: true,},
    extend: {
      colors: {
        pblack: "#0E0033",
        pblue: "#160051",
        notifyBlue: "#4B29A6",
        lightBlue: "#4B29A6",
        pviolet: "#e758d4",
        purple: "#E758D7",
        plightviolet: "#FFE2FF",
        pink: "#FCB5B5",
        gray: "#ECE5FF",
        inbetweenGray: "#656565",
        lightGray: "#F6F2FF",
        lemon: "#22C55E",
        toggleColor: "#6D7280",
      },
    },
  },
  plugins: [],
}
