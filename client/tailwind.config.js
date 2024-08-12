/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        aquire: ['Aquire', 'sans-serif'],
        aquirelight: ['AquireLight', 'sans-serif'],
        aquirebold: ['AquireBold', 'sans-serif'],
        altedin: ['Altedin', 'sans-serif'],
        altedinbold: ['AltedinBold', 'sans-serif']
      },
    },
  },
  plugins: [],
}

