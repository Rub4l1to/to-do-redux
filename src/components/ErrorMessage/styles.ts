import styled from '@emotion/styled';
//* Animations
import { fadeIn } from 'styles/animations';

export const ErrorBase = styled.span`
  display: flex;
  color: red;
  font-size: 0.815rem;
  gap: 4px;
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  animation: ${fadeIn} 0.5s ease-in-out;
  text-align: start;
`;

export const ErrorMessage = styled(ErrorBase)`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
`;
