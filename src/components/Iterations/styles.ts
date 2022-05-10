import styled from '@emotion/styled';

//* Button styles
import { Button } from 'components/Button/styles';
import { fadeIn, fadeOut } from 'styles/animations';

//* Mixins
import { MarginBlock, PaddingBlock, PaddingInline } from 'styles/mixins';

export const Iterations = styled('article')<{ toggle: boolean }>`
  position: relative;
  ${PaddingInline({ start: 2, end: 2 })};
  ${PaddingBlock({ start: 2, end: 2 })};
  inline-size: ${({ toggle }) => (toggle ? '30px' : '400px')};
  background: ${({ theme: { colors } }) => colors.background};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const Content = styled('div')<{ toggle: boolean }>`
  visibility: ${({ toggle }) => (toggle ? 'hidden' : 'visible')};
  animation: ${({ toggle }) => (toggle ? fadeOut : fadeIn)} 0.3s ease-in-out;
  transition: opacity 0.5s ease-in-out;
`;

export const Heading = styled('div')`
  display: flex;
  flex-direction: column;
  inline-size: max-content;
`;

export const Title = styled('h2')`
  font-size: 2rem;
  line-height: 2.375rem;
  letter-spacing: -0.125rem;
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
`;

export const Subtitle = styled('p')`
  font-size: 1rem;
  line-height: 1.375rem;
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
`;
