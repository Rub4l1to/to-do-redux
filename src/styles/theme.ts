import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  fonts: {
    primary: {
      regular: 'WorkSans-Regular',
      medium: 'WorkSans-Medium',
      bold: 'WorkSans-Bold',
      extrabold: 'WorkSans-Extrabold',
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
    primary: 'blue',
  },
};
