module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", ".src/**/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        desktop: "1280px",
        xl: "1440px",
      }, //screen ends here
      colors: {
        primaryRed: "#F87458",
        customBlack: "#1b1b1b",
        faintRed: "#FFFBFB",
      }, //color ends here
    }, //extend ends here
  }, //theme ends here
  plugins: [],
};
