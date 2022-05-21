import styled from '@emotion/styled';

export const List = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Heading = styled('div')``;

export const Title = styled('h2')`
  font-size: 40px;
  line-height: 46px;
  letter-spacing: -2px;
  font-family: ${({ theme: { fonts } }) => fonts.primary.semibold};
`;

export const Items = styled('div')`
  display: flex;
  flex-wrap: wrap;

  gap: 12px;
`;
