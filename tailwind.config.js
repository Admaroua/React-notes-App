/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#fef68a',
        'green':'#67d7cc',
        'button':'#e1e1e1',

      },
    },
  },
  plugins: [],
}

