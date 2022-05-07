import '@emotion/react';

//* Interfaces
import { Fonts, BreakPoints, Colors } from 'interfaces/theme';

declare module '@emotion/react' {
  export interface Theme {
    fonts: Fonts;
    breakpoints: BreakPoints;
    colors: Colors;
  }
}
