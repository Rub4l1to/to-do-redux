import styled from '@emotion/styled';

//* Mixins
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const Button = styled('button')<{ toggleButton: boolean }>`
  border: none;
  ${PaddingBlock({ start: 1, end: 1 })};
  ${PaddingInline({ start: 0.75, end: 0.75 })};
  background: ${({ theme: { colors } }) => colors.secondary};
  color: ${({ theme: { colors } }) => colors.primary};
  position: absolute;
  bottom: -20px;
  left: 50%;
  inline-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: transform 0.2s ease-in-out;
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.secondary};
  }

  & svg {
    font-size: 16pt;
    font-weight: bold;
    transition: transform 0.3s ease-in-out;
    transform: rotate(${({ toggleButton }) => (toggleButton ? '-90deg' : '90deg')});
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    left: inherit;
    right: -25px;
    bottom: 49%;

    & svg {
      transform: rotate(${({ toggleButton }) => (toggleButton ? '-180deg' : '0deg')});
      transition: transform 0.3s ease-in-out;
    }
  }
`;
