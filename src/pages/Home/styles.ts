import styled from '@emotion/styled';

//* Mixins
import { BlockSize, InlineSize, PaddingBlock, PaddingInline } from 'styles/mixins';

export const Home = styled.section`
  ${InlineSize({ inlineSize: '100vw', minInlineSize: '100vw', maxInlineSize: '100vw' })}
  ${BlockSize({ blockSize: 'auto', minBlockSize: '100vh', maxBlockSize: 'max-content' })}
  ${PaddingBlock({ start: 2, end: 2 })}
  ${PaddingInline({ start: 2, end: 2 })}
  background: ${({ theme: { colors } }) => colors.background};
  color: ${({ theme: { colors } }) => colors.primary};
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
`;
