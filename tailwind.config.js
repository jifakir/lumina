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
        'red': '#FF6364',
        'red2': '#CB4040',
        'lightpeach': '#FFDAAE',
        'lightcyan': '#3CB1C3',
        'blue': '#016DB0',
        'skyblue': '#5C93F4',
        'darkblue': '#97D0FF',
        'lightgreen': '#01FFCA',
        'lightblue': '#CDE6F7',
        'thinblue': '#E3F0FF',
        'blue3': '#6384FF',
        'blue4': '#56CCF2',
        'black1': '#333333',
        'black2': '#181C33',
        'black3': '#3C4F65',
        'black4': '#23262F',
        'green1': '#1F976C',
        'pink1': '#F48BBE',
        'purple1': '#8B70D8',
      },
      fontFamily: {
        'primary': ['Inria Sans'],
        'secondary': ['Monument Extended'],
      },
      fontSize: {
        '10px': '0.625rem',
        '40px': '2.5rem',
        '56px': '3.5rem',
        '80px': '5rem'

      },
      spacing: {
        '13': '53px',
        '18': '4.688rem',
        '90': '360px',
        '110': '28rem'
      },
      boxShadow: {
        high: '50px 50px 38px 14px rgba(0,0,0,0.2)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
