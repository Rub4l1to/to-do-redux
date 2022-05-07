import { css } from '@emotion/react';

//* Mixins
import { BlockSizeProps, FlexboxProps, InlineSizeProps, SpacingProps } from 'interfaces/styles/mixins';

export const InlineSize = ({ inlineSize, minInlineSize, maxInlineSize }: InlineSizeProps) => css`
  inline-size: ${inlineSize};
  min-inline-size: ${minInlineSize};
  max-inline-size: ${maxInlineSize};
`;

export const BlockSize = ({ blockSize, minBlockSize, maxBlockSize }: BlockSizeProps) => css`
  block-size: ${blockSize};
  min-block-size: ${minBlockSize};
  max-block-size: ${maxBlockSize};
`;

export const PaddingBlock = ({ start, end }: SpacingProps) => css`
  padding-block-start: ${start}rem;
  padding-block-end: ${end}rem;
`;

export const MarginBlock = ({ start, end }: SpacingProps) => css`
  padding-block-start: ${start}rem;
  padding-block-end: ${end}rem;
`;

export const PaddingInline = ({ start, end }: SpacingProps) => css`
  padding-inline-start: ${start}rem;
  padding-inline-end: ${end}rem;
`;

export const MarginInline = ({ start, end }: SpacingProps) => css`
  margin-inline-start: ${start}rem;
  margin-inline-end: ${end}rem;
`;

export const flexbox = ({ justify, align, direction }: FlexboxProps) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;
