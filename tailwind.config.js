/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "form-color": "#8C8C8C",
      },
    },
    fontFamily: {
      open: ['"Open Sans"'],
    },
    backgroundImage: {
      "hero-image": "url('../src/assets/backImage.png')",
    },
  },
  plugins: [],
};
