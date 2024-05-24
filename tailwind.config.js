/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#026AA2",
          100: "#F5FBFF",
          200: "#7CD4FD",
        },
        secondary: {
          DEFAULT: "#64748B",
          100: "#FCFCFD",
          200: "#E2E8F0",
          300: "#94A3B8",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        rlight: ["Ranade-Light", "sans-serif"],
        rregular: ["Ranade-Regular", "sans-serif"],
        rmedium: ["Ranade-Medium", "sans-serif"],
        rbold: ["Ranade-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
