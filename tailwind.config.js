/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#5C6069",
        color2: "#7687B5",
        color14: "#7687B5", // Same as color2
        color3: "#7687B54A",
        color4: "#FFFFFF0D",
        color11: "#FFFFFF0D", // Same as color4
        color5: "#8E8D8D",
        color6: "#282828",
        color7: "#263048",
        color8: "#333B4F",
        color9: "#7587B4",
        color10: "#242832",
        color12: "#19191B",
        color13: "#0B0C0D",
        color15: "#91B0FF",
        color16: "#E2E8F8",
        color17: "#C5CDE3",
        color18: "#333B4F"
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        'serviceGrid': 'repeat(auto-fill , minmax(19rem , 1fr))',
      },
    },
  },
  plugins: [],
};
