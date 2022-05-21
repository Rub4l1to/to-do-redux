import styled from '@emotion/styled';
import { fadeIn } from 'styles/animations';
import { Flexbox, PaddingBlock, PaddingInline } from 'styles/mixins';

export const Item = styled('div')`
  ${PaddingInline({ start: 2, end: 2 })};
  ${PaddingBlock({ start: 2, end: 2 })};
  ${Flexbox({ justify: 'space-between', align: 'flex-start', direction: 'column' })};
  gap: 12px;
  position: relative;
  max-inline-size: 400px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  animation: ${fadeIn} 500ms ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Section = styled('div')`
  inline-size: 100%;
`;

export const Label = styled('label')`
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: bold;
`;
