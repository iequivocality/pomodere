/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        basis: 'flex-basis'
      },
      animation: {
        'overlay-show': 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'content-show': 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      },
      keyframes: {
        overlayShow: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        contentShow: {
          '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
        }
      }
    }
  },
  plugins: []
}
