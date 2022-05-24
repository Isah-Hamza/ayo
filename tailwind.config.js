module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      }, //screen ends here
      colors: {
        primaryRed: "#F87458",
        customBlack: "#1b1b1b",
        faintRed:"#FFFBFB",
      }, //color ends here
    }, //extend ends here
  }, //theme ends here
  plugins: [],
};
