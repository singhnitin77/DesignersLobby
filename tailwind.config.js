const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Space: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-background": "url('../src/assets/hero-bg.png')",
        "background-2": "url('../src/assets/Bg2.png')",
        "background-3": "url('../src/assets/Bg3.png')",
      },
    },
  },
  plugins: [],
};
