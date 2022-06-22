module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "390px",
      tablet: "800px",

      laptop: "1024px",
      desktop: "1440px",

      sm: "480px",
      mds: "640px",
      smx: "600px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: {
        site: "#0B0D17",
        medium: "#222222",
        DEFAULT: "#000000",
      },
      white: {
        pure: "#FFFFFF",
        off: "#F5F5F5",
      },
      red: "#990000",
      blue:"D0D6F9",
    },
    fontSize: {
      xxxs: ["0.688rem "], // 11px
      xxs: ["0.813rem "], // 13px
      xs: ["0.875rem", { lineHeight: "1.438rem" }], // 14x, 23px
      sm: ["0.938rem"], // 15px
      base: ["1rem", { lineHeight: "1.625rem" }], // 16x, 26px
      lg: ["1.063rem"], // 17px
      xl: ["1.125rem"], // 18px
      "2xl": ["1.25rem"], // 20px
      "3xl": ["1.5rem"], // 24px
      "4xl": ["1.875rem"], // 30px
      "5xl": ["2.25rem"], // 36px
      "6xl": ["2.813rem"], // 45px
    },
    fontFamily: {
      Bellefair: ["Libre Baskerville", "sans-serif"],
      Barlow: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
