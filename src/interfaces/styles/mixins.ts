export interface FlexboxProps {
  justify: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export interface SpacingProps {
  start: number;
  end: number;
}
