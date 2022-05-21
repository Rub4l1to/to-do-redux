import styled from '@emotion/styled';
//* Interfaces

//* Mixins
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const InputText = styled.div`
  display: flex;
  gap: 8px;
  inline-size: 100%;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-size: 0.75rem;
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    font-size: 1rem;
  }
`;
