/** @type {import('tailwindcss').Config} */
import colors, { green, slate } from "tailwindcss/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary': "#F0F2F5",
      'secondary': "#E7FCE3",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      blue: colors.blue,
      green: colors.green,
      slate: colors.slate,
      emerald: colors.emerald
    },
    extend: {},
  },
  plugins: [],
}