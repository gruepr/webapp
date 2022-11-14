/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gblue: "#13A9B2",
        dark: "#053437",
        gyellow: "#053437",
        yellow50: "FFFBF1"
      },

      screens: {
        'mobile': '320px',
  
        'tablet': '768px',
  
        'laptop': '1024px',
  
        'desktop': '1440px',
  
        'desktopMax': '1920px',
      },

      backgroundImage: {
        'home-hero-bg': "url('../src/img/hero-bg.svg')"
      }


    
    },
  },
  plugins: [],
};


