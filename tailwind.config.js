/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: '#f8b4c8',
        peach: '#ffd6b3',
        lavender: '#d4b8e0',
        mint: '#b8e0d2',
        cream: '#fff8f0',
        gold: '#e8c96e',
        'deep-rose': '#c4607a',
        'soft-purple': '#9b7bb5',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(135deg, #ffeaf4 0%, #fff0f7 30%, #fdf0ff 60%, #f0f4ff 100%)',
        'badge-gradient': 'linear-gradient(135deg, #f8b4c8, #d4b8e0)',
      },
      boxShadow: {
        'soft': '0 8px 25px rgba(248, 180, 200, 0.25)',
        'medium': '0 12px 40px rgba(248, 180, 200, 0.35)',
        'glow': '0 0 30px rgba(248, 180, 200, 0.5)',
      }
    },
  },
  plugins: [],
}
