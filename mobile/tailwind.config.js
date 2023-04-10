/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FA4A0C",
        adress: "#F2A900",
        showMore: "#459FCA",
        new: "#E9B737",
        search: "#CFCFCF",

      }
    },
  },
  plugins: [],
}

