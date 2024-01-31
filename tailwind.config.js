/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "vermelho-1": "#ffbaba",
        "vermelho-2": "#ff7b7b",
        "vermelho-3": "#ff5252",
        "vermelho-4": "#ff0000",
        "vermelho-5": "#a70000",
      }
    },
  },
  plugins: [],
}

