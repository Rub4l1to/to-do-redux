import styled from '@emotion/styled';

//* Mixins
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const TodoList = styled('article')`
  ${PaddingInline({ start: 1.5, end: 1.5 })};
  ${PaddingBlock({ start: 1.5, end: 1.5 })};
  flex: 1 1 100%;
  background: ${({ theme: { colors } }) => colors.background};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
