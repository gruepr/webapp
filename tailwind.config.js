/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        white: "#ffffff",

        primary: {
          500: "#13A9B2",
          400: "#42BAC1",
          300: "#71CBD1",
          200: "#A1DDE0",
          100: "#B8E5E8",
          50: "#E7F6F7",
        },

        neutral: {
          500: "#053437",
          400: "#375D5F",
          300: "#5E7A7B",
          200: "#9BAEAF",
          100: "#B4C2C3",
          50: "#E6EBEB",
        },

        accent: {
          500: "#FFD771",
          400: "#FFDF8D",
          300: "#FFE7AA",
          200: "#FFEFC6",
          100: "#FFF3D4",
          50: "#FFFBF1",
        },
      },

      screens: {
        mobile: "320px",

        tablet: "768px",

        laptop: "1024px",

        desktop: "1440px",

        desktopMax: "1920px",
      },

      backgroundImage: {
        "home-hero-bg": "url('../src/img/hero-bg.svg')",
        "faq-bg": "url('../src/img/faq-bg.svg')",
        "aboutus-bg": "url('../src/img/aboutus-bg.svg')"
      },
    },
  },
  plugins: [



    require('@tailwindcss/aspect-ratio')

  ],
};
