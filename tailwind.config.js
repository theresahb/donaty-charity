/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
      },
      
      colors:{
        brandColor: '#1AD0D1',
        violetColor: '#9F5FFE',
        ashColor: '#FAFAFA',
        blackColor: '#1D1D1D',
        textColor: '#989898',
      },
    },

    screens: {
      'sx': {'min': '100px', 'max': '500px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

