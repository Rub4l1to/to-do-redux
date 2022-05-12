import styled from '@emotion/styled';

//* Mixins
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const TextArea = styled.div`
  display: flex;
  gap: 8px;
  inline-size: 100%;
  flex-direction: column;
`;

export const InputTextArea = styled.textarea`
  ${PaddingBlock({ start: 0.875, end: 0.875 })};
  ${PaddingInline({ start: 0.75, end: 0.75 })};
  font-size: 1rem;
  outline: none;
  inline-size: 100%;
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  resize: none;
  block-size: 150px;
`;

export const InputLabel = styled.label`
  font-size: 0.75rem;
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    font-size: 1rem;
  }
`;
