module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop":
          "url('/public/assets/technology/background-technology-desktop.jpg')",
        "hero-tablet":
          "url('/public/assets/technology/background-technology-mobile.jpg')",
        "hero-mobile":
          "url('/public/assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
