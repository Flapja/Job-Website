/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        600: "1300px",
      },
      height: {
        560: "600px",
        530: "560px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        open_sans: ["Open Sans", "sans-serif"],
        pt_serif: ["PT Serif", "serif"],
      },

      flexBasis: {
        "1/14": "32%",
      },
      colors: {
        "main-white": "rgb(255 255 255)",
        "main-green": "#17594A",
        "gradient-green": "#A2FF86",
        "main-yellow": "#E9B824",
        "white-green": "#A6FF96",
        "main-blue": "#4E4FEB",
        "dark-green": "#19282F",
      },
    },
  },
  plugins: [],
};
