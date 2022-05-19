module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#176F6B",
          secondary: "#FFC000",
          accent: "#FFEDD5",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
      {
        dark: {
          primary: "#000",
          secondary: "#000",
          accent: "#FFE",
          neutral: "#F3F4F6",
          "base-100": "#ff7",
          info: "#98A",
          success: "#1BB",
          warning: "#DF7",
          error: "#FA5",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
