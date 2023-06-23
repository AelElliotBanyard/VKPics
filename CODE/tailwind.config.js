///** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        main: "url('/img/bg.png')",
        "main-dark": "url('/img/bg-dark.png')",
      },
      textStroke: {
        DEFAULT: "0.2rem #000000",
        dark: "0.2rem #ffffff",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-stroke": (value) => ({
            WebkitTextStroke: value,
            WebkitTextFillColor: "transparent",
          }),
        },
        { values: theme("textStroke") }
      );
    }),
  ],
};
