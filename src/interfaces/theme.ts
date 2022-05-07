export interface BreakPoints {
  xs: string;
  sm: string;
  md: string;
  xl: string;
  xxl: string;
}

export interface Fonts {
  primary: FontTypes;
}

export interface Colors {
  primary: string;
}

interface FontTypes {
  regular: string;
  medium?: string;
  bold: string;
  extrabold?: string;
}
