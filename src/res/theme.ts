import fontFamily from './fonts'

const theme = {
  typography: {
    fontFamily: fontFamily,
    fontSizes: {
      smaller: '0.75rem', // 12px
      small: '0.875rem', // 14px
      short: '0.9375rem', // 15px
      regular: '1rem', // 16px
      tall: '1.0625rem', // 17px
      medium: '1.125rem', // 18px
      large: '1.1875rem', // 19px
      larger: '1.25rem', // 20px
      extraLarge: '1.35rem' // just short of...22px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700
    }
  },
  palette: {
    fontColor: {
      dark: {
        primary: '#000',
        secondary: '#333'
      },
      light: {
        primary: '#fff',
        secondary: '#eee'
      },
      link: {
        primary: '#4063AF',
        secondary: '#555'
      }
    },
    primary: {
      main: '#edb801',
      light: '#fed234' // use for hover state // gold
    },
    secondary: {
      main: '#6e8c76', // dark olive
      light: '#abcab3' // light olive
    },
    common: {
      white: '#ffffff',
      black: '#000000'
    }
  },
  borderRadius: '.2rem'
}

export default theme
