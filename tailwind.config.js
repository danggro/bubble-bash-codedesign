/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A2C3D",
        green: "#2F6B4F",
        secondary: "#F9F9F9",
      },
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "ui-system"],
      },
    },
  },
  plugins: [],
};
