module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryblack: "#222222",
        accent: "#00C880",
      },
      fontFamily: {
        Oswald: ['"Rubik"'],
        Oxygen: ['"Roboto"'],
      },
    },
  },
  plugins: [],
};
