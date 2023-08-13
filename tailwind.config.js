/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "black":"#020617",
      "white":"#FFFFFF",
      "darkNavy":"#111827",
      "golden":"#D99904",
      "lightGray":"#E8E8E8",
      "black":"#020617",
      "black":"#020617",
      "black":"#020617",
      "black":"#020617",
      "black":"#020617",
      "black":"#020617",
    }
  },
  plugins: [require("daisyui")],
}

