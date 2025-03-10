/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { Oswald: ["Oswald", "san-serif"] },
      colors: {
        secondary: "#bca125",
        primary: "#aa30b8",
      },
    },
  },
  plugins: [],
};
