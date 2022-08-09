import fontFamily from './fonts'

// theme.ts
import { DefaultTheme, Palette, Typography, Layout } from 'styled-components'

// TYPES
declare module 'styled-components' {
  export interface Palette {
    primary: string
    secondary: string
    tertiary: string
    white: string
    black: string
  }

  export interface Typography {
    fontFamily: string
    fontSizes: {
      small: string
      short: string
      regular: string
      tall: string
      large: string
      larger: string
      extraLarge: string
    }
    fontWeight: {
      extraLight: 200
      light: 300
      normal: 400
      heavy: 500
      extraHeavy: 600
      bold: 700
    }
  }

  export interface Colors {
    text: {
      body: string
      heading: string
      subheading: string
      link: {
        standard: string
        visited: string
        active: string
      }
    }
    background: {
      primary: string
      secondary: string
    }
  }

  export interface Layout {
    borderRadius: string
  }

  export interface DefaultTheme {
    palette: Palette
    typography: Typography
    colors: Colors
    layout: Layout
  }
}

// EXPORTS
export const palette: Palette = {
  primary: '#000000',
  secondary: '#000000',
  tertiary: '#000000',
  white: '#ffffff',
  black: '#000000'
}

export const typography: Typography = {
  fontFamily,
  fontSizes: {
    small: '0.9rem',
    short: '0.95rem',
    regular: '1rem',
    tall: '1.05rem',
    large: '1.1rem',
    larger: '1.2rem',
    extraLarge: '1.4rem'
  },
  fontWeight: {
    extraLight: 200,
    light: 300,
    normal: 400,
    heavy: 500,
    extraHeavy: 600,
    bold: 700
  }
}

export const layout: Layout = {
  borderRadius: '.3rem'
}

export const lightTheme: DefaultTheme = {
  palette,
  typography,
  colors: {
    text: {
      body: '#333333',
      heading: '#333333',
      subheading: '#777777',
      link: {
        standard: '#0000EE',
        visited: '#551A8B',
        active: '#EE0000'
      }
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8f8f8'
    }
  },
  layout
}

export const darkTheme: DefaultTheme = {
  palette,
  typography,
  colors: {
    text: {
      body: '#eeeeee',
      heading: '#eeeeee',
      subheading: '#cccccc',
      link: {
        standard: '#0000EE',
        visited: '#551A8B',
        active: '#EE0000'
      }
    },
    background: {
      primary: '#000000',
      secondary: '#080808'
    }
  },
  layout
}
