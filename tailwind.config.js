module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      height: {
        "32-rm": "32rem",
        "40-rm": "40rem",
      },
      colors: {
        "light-blue-green": "#5cf4fe",
        "light-blue": "#4daffe",
      },
    },
  },
  plugins: [],
};
