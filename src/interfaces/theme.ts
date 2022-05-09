export interface BreakPoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Fonts {
  primary: FontTypes;
}

export interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  background: string;
}

interface FontTypes {
  light: string;
  regular: string;
  medium: string;
  semibold: string;
  bold: string;
  extrabold: string;
}
