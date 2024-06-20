/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0F0017",
        "primary-light": "#C4C4C4",
        "secondary-dark": "#1D1D2E",
        "secondary-light": "#E9EFF0",
        accent: "#C0091E",
      },
    },
  },
  plugins: [],
};
