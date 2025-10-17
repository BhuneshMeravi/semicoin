/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        semiblue: "#11AEFD",
        deep: "#07070a",
        accent: "#00f5b7",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Montserrat", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        orbitron: ["Orbitron", "monospace"],
      }
    },
  },
  plugins: [],
}
