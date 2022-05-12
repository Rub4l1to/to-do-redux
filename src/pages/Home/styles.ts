import styled from '@emotion/styled';

export const Home = styled('section')`
  background: ${({ theme: { colors } }) => colors.tertiary};
  color: ${({ theme: { colors } }) => colors.primary};
  min-block-size: 100vh;
  gap: 40px;
  display: flex;
  flex-direction: row;
`;
