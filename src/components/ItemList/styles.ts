import styled from '@emotion/styled';

//* Mixins
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const List = styled('div')``;

export const Heading = styled('div')``;

export const Title = styled('h2')`
  font-size: 40px;
  line-height: 46px;
  letter-spacing: -2px;
  font-family: ${({ theme: { fonts } }) => fonts.primary.semibold};
`;
