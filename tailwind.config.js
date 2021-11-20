module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#181C33',
        'secondary': '#0B0D28',
        'cyan': '#019BB9',
        'magenta': '#F48BBE',
        'skyblue': '#5C93F4',
        'red': '#FF6364',
        'lightpeach': '#FFDAAE',
        'lightcyan': '#3CB1C3',
        'blue': '#016DB0',
        'green': '#01FFCA',
        'lightblue': '#CDE6F7',
      },
      fontFamily: {
        'primary': ['Inria Sans'],
        'secondary': ['Monument Extended'],
      },
      spacing: {
        '18': '4.688rem',
        '110': '28rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
