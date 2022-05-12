import styled from '@emotion/styled';
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const Button = styled('button')`
  border: none;
  background: ${({ theme: { colors } }) => colors.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: ${({ theme: { fonts } }) => fonts.primary.semibold};
  font-size: 1rem;
  ${PaddingInline({ start: 1, end: 1 })};
  ${PaddingBlock({ start: 1, end: 1 })};
  transition: all 1s;
  color: ${({ theme: { colors } }) => colors.primary};

  &:hover {
    color: ${({ theme: { colors } }) => colors.tertiary};
    background: ${({ theme: { colors } }) => colors.primary};
    cursor: pointer;
  }
`;
