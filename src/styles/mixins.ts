import { css } from '@emotion/react';

//* Mixins
import { FlexboxProps, InlineSizeProps } from 'interfaces/styles/mixins';

export const inlinseSize = ({ inlineSize, maxInlineSize }: InlineSizeProps) => css`
  inline-se: ${inlineSize};
  max-inline-size: ${maxInlineSize};
`;

export const flexbox = ({ justify, align, direction }: FlexboxProps) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;
