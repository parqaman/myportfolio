/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C0C0C",
        navbar: "#262626",
      },
      borderWidth: {
        1.5: "1.5px",
      }
    },
  },
  plugins: [require("daisyui")],
}
