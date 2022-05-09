import styled from '@emotion/styled';

//* Button styles
import { Button } from 'components/Button/styles';

//* Mixins
import { MarginBlock, PaddingBlock, PaddingInline } from 'styles/mixins';

export const Iterations = styled('article')`
  position: relative;
  ${PaddingInline({ start: 0, end: 0 })};
  ${PaddingBlock({ start: 2, end: 2 })};
  flex: 1 1 auto;
  max-block-size: 100%;
  background: ${({ theme: { colors } }) => colors.background};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    ${PaddingInline({ start: 2, end: 2 })};
  }
`;

export const Heading = styled('div')`
  display: flex;
  flex-direction: column;
  visibility: hidden;
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
