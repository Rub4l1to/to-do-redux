import styled from '@emotion/styled';

//* Mixins
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const InputTextArea = styled.textarea<{ error?: boolean }>`
  ${PaddingBlock({ start: 0.875, end: 0.875 })};
  ${PaddingInline({ start: 0.75, end: 0.75 })};
  font-size: 1rem;
  outline: none;
  inline-size: 100%;
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  resize: none;
  block-size: 150px;
  border: 1px solid ${({ theme: { colors }, error }) => (error ? 'red' : colors.tertiary)};

  &:disabled {{
    cursor: not-allowed;
  }
`;
