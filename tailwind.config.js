/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Update this path according to your project structure
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        cum: '#f2f1ef',
        foreskin: '#d9b18e'
      }
    },
  },
  plugins: [],
}
