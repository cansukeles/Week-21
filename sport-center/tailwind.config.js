/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "#FAA519",
        brightorange: "#fbbf24",
        lightblue: "#345394",
        homecolor: "#F2F8FE",
        navcolor: "#355592",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
