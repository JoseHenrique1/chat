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
      'secondary': "#6b7280",
       'tertiary': "#ffffff",
       'quaternary': "#1f2937",
       'quinternary': "#d1d5db",
       'special': "#3b82f6",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      blue: colors.blue,
      green: colors.green,
      slate: colors.slate,
      emerald: colors.emerald,
      red: colors.red,
      orange: colors.orange
    },
    extend: {},
  },
  plugins: [],
}