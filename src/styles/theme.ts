import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  fonts: {
    primary: {
      light: 'Raleway-Light',
      regular: 'Raleway-Regular',
      medium: 'Raleway-Medium',
      bold: 'Raleway-Bold',
      semibold: 'Raleway-Bold',
      extrabold: 'Raleway-Extrabold',
    },
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  colors: {
    primary: '#ffffff',
    secondary: '#2873d0',
    tertiary: '#141414',
    quaternary: '#a1a1a1',
    background: 'rgb(65, 63, 63)',
  },
};
