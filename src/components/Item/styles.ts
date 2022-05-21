import styled from '@emotion/styled';
import { fadeIn } from 'styles/animations';
import { Flexbox, PaddingBlock, PaddingInline } from 'styles/mixins';

export const Item = styled('div')`
  ${PaddingInline({ start: 1.5, end: 1.5 })};
  ${PaddingBlock({ start: 1.5, end: 1.5 })};
  ${Flexbox({ justify: 'space-between', align: 'flex-start', direction: 'column' })};
  gap: 12px;
  position: relative;
  flex: 1 1 400px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  animation: ${fadeIn} 500ms ease-in;
`;

export const Section = styled('div')`
  ${Flexbox({ justify: 'flex-start', align: 'flex-start', direction: 'column' })};
  inline-size: 100%;
  gap: 12px;
`;

export const Label = styled('label')`
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: bold;
`;

export const Actions = styled('div')`
  ${Flexbox({ justify: 'flex-end', align: 'flex-start', direction: 'row' })};
  gap: 8px;
`;

export const Icon = styled('span')<{ color: 'danger' | 'standar' }>`
  font-size: 1.5rem;
  color: ${({ theme: { colors }, color }) => {
    switch (color) {
      case 'danger':
        return 'rgb(172, 20, 20)';
      default:
        return colors.secondary;
    }
  }};
`;
