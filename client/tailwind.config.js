/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      desktop: "1280px",
      laprop: "1024px",
      tablet: "769px",
      mobileL: "550px",
      mobileS: "375px",
    },
    colors: {
      purple: "rgb(88 28 135)",
      purple1: "	color: rgb(126 34 206)",
      light: "#fff",
      dark: "#000",
      bluelight: "rgb(56 189 248)",
      yellow: "rgb(251 191 36)",
      green:"rgb(77 124 15)",
      red:'rgb(127 29 29)'
    },
  },

  plugins: [],
};
