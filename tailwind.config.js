/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121110",
        ink2: "#1D1A17",
        gold: {
          DEFAULT: "#B08D57",
          light: "#D8BD8A",
          dark: "#7A5F38",
        },
        cream: "#EFE7DA",
        espresso: "#3B2A20",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["'Work Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
