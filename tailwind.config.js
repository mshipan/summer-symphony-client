/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Spicy: ["Spicy Rice", "cursive"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "school-bg": "url('./src/assets/piano.jpg')",
        piano: "url('./src/assets/playingpiano.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
