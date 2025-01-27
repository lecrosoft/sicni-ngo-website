/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { Oswald: ["Oswald", "san-serif"] },
      colors: {
        secondary: "#00adef",
      },
    },
  },
  plugins: [],
};
