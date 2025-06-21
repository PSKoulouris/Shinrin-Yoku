/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.833rem',    // ~13.33px
        base: '1rem',       // 16px
        md: '1.2rem',       // 19.2px
        lg: '1.44rem',      // 23.04px
        xl: '1.728rem',     // 27.648px
        '2xl': '2.074rem',  // 33.1776px
        '3xl': '2.488rem',  // 39.9744px
        '4xl': '2.986rem',  // 47.968px
        '5xl': '3.583rem',  // 57.5616px
        '6xl': '4.3rem',    // 68.97312px
        '7xl': '5.16rem',   // 82.767744px
        '8xl': '6.192rem',  // 99.3212928px
        '9xl': '7.431rem',  // 119.185548px
        '10xl': '8.917rem', // 143px
      },
      /*Create custom gradient class with backgroundImage*/
      backgroundImage: {
        'navBar-gradient': 'linear-gradient(to bottom, black 45%, rgba(0,0,0,0.5) 70% , rgba(0, 0, 0, 0) 100%)'
      },
      /* Golden colour*/
      colors: {
      'gold': '#E2B63A',
      },
    },
  },
  plugins: [],
};




