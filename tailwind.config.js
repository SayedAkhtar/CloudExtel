module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        teal: { 50: "#d3e3f7", 400: "#2ba7af", "400_01": "#289299" },
        white: {
          A700_b2: "#ffffffb2",
          A700_7e: "#ffffff7e",
          A700_94: "#ffffff94",
          A700_a3: "#ffffffa3",
          A700_01: "#fafdff",
          A700: "#ffffff",
        },
        blue_gray: {
          800: "#233852",
          900: "#1a2635",
          "800_94": "#23385294",
          "900_94": "#1a263594",
        },
        blue: {
          100: "#b6d3f6",
          300: "#6da8ed",
          600: "#3788e6",
          800: "#2364a5",
          "800_01": "#226faf",
          "600_01": "#3186db",
        },
        light_blue: { 50: "#d4ecff", 900: "#045ea8" },
        gray: {
          50: "#f3fbfb",
          100: "#f5f7f8",
          900: "#0a2135",
          "100_02": "#f6f7f9",
          "100_01": "#fcf7f3",
        },
        orange: { 400: "#ff9124", "400_99": "#ff912499" },
        indigo: { 300: "#5793ce", 500: "#396caa", 900: "#173d7a" },
        cyan: { 200: "#70d5db", 300: "#57cdd5", 400: "#37c4cd" },
      },
      fontFamily: { montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
