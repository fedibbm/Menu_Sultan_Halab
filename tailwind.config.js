/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkCaramel : "#c7ab87",
        darkerCaramel :"#998162",
        lightBeige : "#feffef",
        Beige:"#dfcba2",
        categoryCardBg:"#DFCBA2",
        smokyBlack:"#14110F"
      }
    },
  },
  plugins: [
],
} 
