import styled from '@emotion/styled';

//* Mixins
import { BlockSize, InlineSize } from 'styles/mixins';

export const Home = styled('section')<{ toggleMenu: boolean }>`
  ${InlineSize({ inlineSize: '100vw', minInlineSize: '100vw', maxInlineSize: '100vw' })}
  ${BlockSize({ blockSize: 'auto', minBlockSize: '100vh', maxBlockSize: 'max-content' })}
  background: ${({ theme: { colors } }) => colors.tertiary};
  color: ${({ theme: { colors } }) => colors.primary};
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
