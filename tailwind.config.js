/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        CTA: "url('../src/assets/images/cta.jpg')",
        Ticket:
          "url('../src/assets/images/Ticket section/pablo-heimplatz-ZODcBkEohk8-unsplash.jpg')",
        Shop: "url('../src/assets/images/bruno-kelzer-LvySG1hvuzI-unsplash.jpg')",
      }),
      colors: {
        primary: '#7848F4',
        backgroundGrey: '#F8F8FA',
        navyBlue: '#10107B',
        grey600: '#7E7E7E',
      },
      screens: {
        lg: '992px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
}
