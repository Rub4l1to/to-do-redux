import styled from '@emotion/styled';
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const Search = styled('input')`
  inline-size: 100%;
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.tertiary};
  outline: none;
  border: none;
  font-size: 1rem;
  ${PaddingBlock({ start: 1, end: 1 })};
  ${PaddingInline({ start: 1, end: 1 })};
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
`;
