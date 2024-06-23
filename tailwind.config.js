/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textColorPrimary: '#504d68',
        col_blue : '#4cc2f1',
        col_pink : '#ff4e98',
        col_greenBlue : '#23d2c3',
        col_yellow : '#ffbf35',
        col_purple : '#5f74d9',
        col_lightPurple : '#585f87',
        col_lightPink : '#d998fd',
        col_grayWhite : '#eff0f6',

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}