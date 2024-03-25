/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "rgba(81, 128, 246, 1)",
        boldBlue: "rgba(50, 68, 115, 1)",
      },
    },
  },
  plugins: [],
};
