module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        },
        tints: {
          100: '#E7EAEC',
          200: '#D0D5D9',
          300: '#B9C0C6',
          400: '#A2ABB4',
          500: '#8B96A1',
          600: '#73818E',
          700: '#425566',
          800: '#2b3f54',
          900: '#172d44'
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    }
  },
  plugins: []
}
