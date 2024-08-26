/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primarycolor:"#FDAB2F",
        secondarycolor:"#FF0751",
        whitecolor:"#ffffff",
        blackcolor:"#000000",
        navigationcolor:"#3E3E3C"
      }
    },
  },
  plugins: [],
}

