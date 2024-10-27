/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        SquadaOne: ["Squada One", "sans-serif"],
      },
      keyframes: {
        "move-lightning": {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(5px) translateY(1px)" },
          "75%": { transform: "translateX(10px) translateY(3px)" },
          "50%": { transform: "translateX(15px) translateY(5px)" },
        },
        animation: {
          "move-lightning": "move-lightning 0.3s ease-in-out infinite",
        },
        colors: {
          botao: "#ff9900",
          "back-cinza": "#D9D9D9",
          "footer-cinza": "#1E1E1E",
        },
      },
    },
    plugins: [],
  },
};
