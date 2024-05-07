/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: { 
      colors: {
      darkgray: '#1E1E1E',
      darkgrayhover: '#333333', 
      darkgrayfocus: '#474747'
    }},
  },
  plugins: [require("daisyui")],
}

