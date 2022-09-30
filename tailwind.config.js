/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    mytheme: {
      primary: "#FA5E01",
      secondary: "#f6d860",
      accent: "#25201D",
      neutral: "#FFF9F5",
      "base-100": "#ffffff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
