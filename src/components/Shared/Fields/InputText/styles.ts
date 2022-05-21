import styled from '@emotion/styled';
//* Interfaces

//* Mixins
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const InputTextField = styled.input<{ error?: boolean }>`
  ${PaddingBlock({ start: 0.875, end: 0.875 })};
  ${PaddingInline({ start: 0.75, end: 0.75 })};
  font-size: 1rem;
  border: 1px solid ${({ theme: { colors }, error }) => (error ? 'red' : colors.tertiary)};
  outline: none;
  inline-size: 100%;
  transition: all 300ms;
  -webkit-transition: all 300ms;
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};

  &::placeholder {
    font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  }
  &:disabled {{
    cursor: not-allowed;
  }
`;
