/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        pop: ['Poppins'],
      },
      backgroundImage:{
        backgroundImage:"url('./src/assets/bannerImg.jpg')"
      },
      maxWidth:{
        banercontent:'643px',
        range:'1180px',
        productContainer:'1240px',
        expContainer:'1270px',
        ftContainer:'1130px',
      },
      colors:{
        333333:'#333333',
        888888:'#B88E2F',
        666666:'#666666',
        AAA:'#3A3A3A',
        BBB:'#B0B0B0',
        CCC:'#F4F5F7',
        badge:'#E97171',
        badge2:'#2EC1AC',
        fcBg:'#FCF8F3',
        fcp:'#616161',
        foterTextCo1:'#9F9F9F',
       
       },
    },
  },
  plugins: [],
}


