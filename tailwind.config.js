/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./app/**/*.{js,jsx,ts,tsx,html}",
    "./pages/**/*.{js,jsx,ts,tsx,html}",
    "./components/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        CTA: "url('../src/assets/images/cta.jpg')",
        Ticket:
          "url('../src/assets/images/Ticket section/pablo-heimplatz-ZODcBkEohk8-unsplash.jpg')",
      }),
    },
  },
  plugins: [],
};
