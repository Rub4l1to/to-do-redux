export interface FlexboxProps {
  justify: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export interface BlockSizeProps {
  blockSize: string;
  minBlockSize: string;
  maxBlockSize: string;
}

export interface InlineSizeProps {
  inlineSize: string;
  minInlineSize: string;
  maxInlineSize: string;
}

export interface SpacingProps {
  start: number;
  end: number;
}
