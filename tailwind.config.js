/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "360pt",
        md: "480pt",
        lg: "768pt",
        xl: "1024pt",
        "2xl": "1440pt",
      },
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["IRANSansX"],
      },
      colors: {
        primary: {
          25: "#FBEFF2",
          50: "#FED5E9",
          100: "#FDABD2",
          200: "#FA58A6",
          300: "#F50779",
          400: "#CB0665",
          500: "#A10550",
          600: "#79043C",
          700: "#510228",
          750: "#3D021E",
          800: "#280114",
          900: "#14010A",
        },
        black: "#0C0C0C",
        background: "#FAF9F5",
        "Gray-202020": "#202020",
        "Gray-404040": "#404040",
        "Gray-606060": "#606060",
        "Gray-868686": "#868686",
        "Gray-CBCBCB": "#CBCBCB",
        "Gray-DFDFDF": "#DFDFDF",
        "Gray-EDEDED": "#EDEDED",
        "Gray-F9F9F9": "#F9F9F9",
        Error: "#C30000",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        extraSmall: ".25rem",
      },
    },
  },
  plugins: [],
};
