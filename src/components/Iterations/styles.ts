import styled from '@emotion/styled';

//* Button styles
import { Button } from 'components/Button/styles';
import { fadeIn, fadeOut } from 'styles/animations';
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const Iterations = styled('article')<{ toggle: boolean }>`
  ${PaddingInline({ start: 1.5, end: 1.5 })};
  ${PaddingBlock({ start: 1.5, end: 1.5 })};
  position: relative;
  background: ${({ theme: { colors } }) => colors.background};
  flex: 0 0 ${({ toggle }) => (toggle ? '400px' : '30px')};
  block-size: 100%;
  transition: flex 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    block-size: 100vh;
  }
`;

export const Content = styled('div')<{ toggle: boolean }>`
  position: absolute;
  animation: ${({ toggle }) => (toggle ? fadeIn : fadeOut)} 0.2s ease-in-out;
  visibility: ${({ toggle }) => (toggle ? 'visible' : 'hidden')};
  transition: opacity visibility 0.2s ease-in-out;
`;
