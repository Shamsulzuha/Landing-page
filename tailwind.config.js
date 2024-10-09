/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#505F98",
        secondary: "##111B47",
        "dark-blue": "#091133",
        "light-blue": "#6F7CB2",
      },
    },
  },
  plugins: [],
};
