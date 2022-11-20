/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#129898",
        secondary: "#41B89B",
        mental: "#5CB50F",
        meds: "#1CC9C9",
      },
    },
  },
  plugins: [],
}
