const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Space: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-background": "url('../src/assets/hero-bg.png')",
        "background-4": "url('../src/assets/bg4.png')",
      },
    },
  },
  plugins: [],
};
