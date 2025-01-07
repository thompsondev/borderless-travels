/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#660476",
        color2: "#ED6300",
        color3: "#040876",
        color4: "#919499",
      },
    },
    fontFamily: {
      font1: ['"Raleway"', "serif"],
      font2: ['"Inter"', "serif"],
      font3: ['"Poppins"', "serif"],

    },
  },
  plugins: [],
};
