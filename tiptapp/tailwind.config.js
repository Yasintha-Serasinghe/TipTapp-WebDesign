/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme:{
    extend: {
      
      fontFamily: {
        'sans': ['Roboto Condensed', 'sans-serif'],
        'play': ['Playpen Sans', 'cursive'],
        'logo':['Playpen Sans','Sansita Swashed']
      },
      colors: {
      
        primary: '#FFFFFF',   // Example: White
        secondary: '#EDEDED', // Example: Light Gray
      },
     
    },
  },
  plugins: [require("daisyui")],
  
};
