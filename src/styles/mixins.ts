import { css } from '@emotion/react';

//* Mixins
import { FlexboxProps, SpacingProps } from 'interfaces/styles/mixins';

export const PaddingBlock = ({ start, end }: SpacingProps) => css`
  padding-block-start: ${start}rem;
  padding-block-end: ${end}rem;
`;

export const MarginBlock = ({ start, end }: SpacingProps) => css`
  margin-block-start: ${start}rem;
  margin-block-end: ${end}rem;
`;

export const PaddingInline = ({ start, end }: SpacingProps) => css`
  padding-inline-start: ${start}rem;
  padding-inline-end: ${end}rem;
`;

export const MarginInline = ({ start, end }: SpacingProps) => css`
  margin-inline-start: ${start}rem;
  margin-inline-end: ${end}rem;
`;

export const Flexbox = ({ justify, align, direction }: FlexboxProps) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;
