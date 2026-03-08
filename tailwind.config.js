/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goku: {
          dark: '#574495', // Set dark background entirely to the requested #574495 purple
          navy: '#d14206', // Was blue/purple, now #d14206 orange
          indigo: '#d14206', // Was blue/purple, now #d14206 orange
          plum: '#6B406D', // Muted purple
          orange: '#574495', // Updated main color
          'orange-dark': '#403273', // Darker purple
          yellow: '#D8C5AD', // Sand/Beige color for accents
          'yellow-light': '#FFFFFF', // Keeping white for extreme highlights
          cyan: '#D8C5AD' // Replacing cyan with the sand color for consistency
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Anton', 'sans-serif'],
        accent: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'goku-aura': 'radial-gradient(circle at 50% 50%, rgba(87, 68, 149, 0.2), #100b20 70%)'
      }
    },
  },
  plugins: [],
}
