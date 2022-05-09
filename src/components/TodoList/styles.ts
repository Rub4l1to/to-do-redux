import styled from '@emotion/styled';

//* Mixins
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const TodoList = styled('article')`
  ${PaddingInline({ start: 2, end: 2 })};
  ${PaddingBlock({ start: 2, end: 2 })};
  flex: 1 1 auto;
  background: ${({ theme: { colors } }) => colors.background};
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
