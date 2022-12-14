/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'spin-6s': 'spin 6s linear infinite',
        'spin-3s': 'spin 3s linear infinite',
        'spin-2s': 'spin 2s linear infinite'
      },
      colors: {
        'tk-red': '#FE2C55',
        'tk-aqua': '#25F4EE'
      }
    }
  },
  plugins: []
}
