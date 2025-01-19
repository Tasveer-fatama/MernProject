/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'custom-rotate': 'custom-rotate 30s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
        'spin-slower': 'spin 40s linear infinite',
        'spin-slowest': 'spin 50s linear infinite',
      },
      keyframes: {
        'custom-rotate': {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
