module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans KR'],
      },
      borderRadius: {
        'p-3': '0.3rem',
        '50-p': '50%',
      },
      fontSize: {
        'r-0': '0rem',
        'p-16': '1.6rem',
        'p-24': '2.4rem',
        1.2: '1.2rem',
        1.3: '1.3rem',
        1.4: '1.4rem',
        1.5: '1.5rem',
        1.6: '1.6rem',
        1.8: '1.8rem',
        2: '2rem',
      },
      inset: {
        'r-4.5': '4.5rem',
        'r-4.6': '4.6rem',
        91: '91px',
        159: '159px',
      },
      colors: {
        kg: {
          200: '#b5b5b5',
          300: '#4c4c4c',
          400: '#333',
        },
        kp: {
          100: '#B1A9C6',
          200: '#D2BEFF',
          300: '#BA99E1',
          400: '#A775D6',
          500: '#875EB3',
          600: '#5F0080',
        },
        discount: {
          100: '#FA622F',
        },
        kdp: {
          100: '#31123D',
          200: '#401351',
          300: '#4F1266',
          400: '#5E107B',
        },
        klp: {
          100: '#E5D6E8',
          200: '#CBAFD2',
          300: '#B088BC',
          400: '#9563A6',
          500: '#7A3D91',
          600: '#5E107B',
          700: '#E8F0FE',
        },
      },
      backgroundImage: theme => ({
        'conversation-btn': 'url(https://res.kurly.com/pc/ico/2011/ico_point_up_18x12.svg)',
      }),
      spacing: {
        'p-28': '2.8rem',
        'p-33': '3.3rem',
        'p-38': '3.8rem',
        'p-400': '40rem',
        'p-308': '30.8rem',
        'p-396': '39.6rem',
        'p-870': '87rem',
        'p-1050': '105rem',
        // rem 단위
        'r-0.3': '0.3rem',
        'r-0.4': '0.4rem',
        'r-0.9': '0.9rem',
        'r-2.2': '2.2rem',
        'r-2.5': '2.5rem',
        'r-3.6': '3.6rem',
        'r-4.4': '4.4rem',
        'r-7.9': '7.9rem',
        'r-10.3': '10.3rem',
        'r-15.8': '15.8rem',
        'r-16.3': '16.3rem',
        'r-24.2': '24.2rem',
        'r-30.9': '30.9rem',
        'r-58': '58rem',
        700: '700vw',
        13: '52px',
        370: '370px',
      },

      outline: {
        0: ['0px solid #ffffff'],
        54: '54px',
        340: '340px',
        19: '1.9rem',
        0.9: '0.9rem',
        2.8: '2.8rem',
        1.1: '1.1rem',
      },
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        900: 900,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
