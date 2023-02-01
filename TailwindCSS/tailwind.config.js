/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    fontFamily: {
      Poppins : ["Poppins , sans-serif"],
    },
    container: {
      center: true,
      padding: '1rem',
      screen: {
        lg: '1124px',
        xl: '1124px',
        "2xl": '1124px',
      }
    }
  },
  plugins: [],
}
