import styled from '@emotion/styled';
import { fadeIn } from 'styles/animations';

//* Button styles
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const Iterations = styled('article')<{ toggle: boolean }>`
  ${PaddingInline({ start: 1.5, end: 1.5 })};
  ${PaddingBlock({ start: 1.5, end: 1.5 })};
  position: relative;
  top: 0;
  background: ${({ theme: { colors } }) => colors.background};
  block-size: ${({ toggle }) => (toggle ? '650px' : '30px')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    animation: ${fadeIn} 1s ease-in-out;
    transition: block-size 1s ease;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    inline-size: ${({ toggle }) => (toggle ? '380px' : '30px')};
    block-size: 100vh;
    transition: inline-size 0.2s ease;
  }
`;

export const Content = styled('div')<{ toggle: boolean }>`
  position: relative;
  inline-size: initial;
  display: flex;
  gap: 12px;
  flex-direction: column;
  transform: ${({ toggle }) => (toggle ? 'translateY(0)' : 'translateY(-150%)')};
  opacity: ${({ toggle }) => (toggle ? '1' : '0')};
  transition: transform 1s ease;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    inline-size: fit-content;
    transform: ${({ toggle }) => (toggle ? 'translateX(0)' : 'translateX(-150%)')};
  }
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
