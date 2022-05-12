import styled from '@emotion/styled';

//* Button styles
import { Button } from 'components/Buttons/Arrow/styles';
import { fadeIn, fadeOut } from 'styles/animations';
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const Iterations = styled('article')<{ toggle: boolean }>`
  ${PaddingInline({ start: 1.5, end: 1.5 })};
  ${PaddingBlock({ start: 1.5, end: 1.5 })};
  position: relative;
  top: 0;
  background: ${({ theme: { colors } }) => colors.background};
  inline-size: ${({ toggle }) => (toggle ? '380px' : '30px')};

  transition: inline-size 1s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Content = styled('div')<{ toggle: boolean }>`
  position: relative;
  inline-size: fit-content;
  display: flex;
  gap: 24px;
  flex-direction: column;
  transition: all 1s;
  transform: ${({ toggle }) => (toggle ? 'translateX(0)' : 'translateX(-150%)')};
`;

export const Heading = styled('div')`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Title = styled('h2')`
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
  font-size: 32px;
`;

export const Subtitle = styled('p')`
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  inline-size: max-content;
`;
