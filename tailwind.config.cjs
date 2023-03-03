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
      },
      fontFamily: {
        base: ['Quicksand', 'cursive']
      },
      boxShadow: {
        "mini": " 0 0 5px 1px rgba(0, 0, 0, 0)",
      },
      scale: {
        mirror: "scaleX(-1)"
      }
    },
  },
  plugins: [require("daisyui")],
}
