const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    colors: {
      white: "#fff",
      black: "#000",
      primary: "#0070F0",
      secondary: "#1F384F",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      tablet: "1025px",
      xl: "1281px",
      "2xl": "1537px",
    },
    extend: {
      fontFamily: {
        body: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "shadow-sm": "0 4px 4px rgba(0, 0, 0, 0.04)",
        "shadow-md": "0 4px 4px rgba(0, 0, 0, 0.25)",
        "shadow-lg": "0 16px 8px rgba(81, 84, 88, 0.08)",
        "shadow-xl": "0 20px 10px rgba(41, 41, 42, 0.07)",
        "shadow-2xl": "0 20px 4px rgba(0, 0, 0, 0.08)",
      },
      lineHeight: {
        "leading-tight": 1.2,
        "leading-snug": 1.3,
        "leading-relaxed": 1.6,
        "leading-1-7": 1.7,
      },
    },
  },
  plugins: [],
};
