/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "976px",
      xl: "1300px",
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
