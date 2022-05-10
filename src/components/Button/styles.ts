import styled from '@emotion/styled';

//* Mixins
import { PaddingBlock, PaddingInline } from 'styles/mixins';

export const Button = styled('button')<{ toggleButton: boolean }>`
  border: none;
  ${PaddingBlock({ start: 0.75, end: 0.75 })};
  ${PaddingInline({ start: 0.75, end: 0.75 })};
  background: ${({ theme: { colors } }) => colors.secondary};
  color: ${({ theme: { colors } }) => colors.primary};
  position: absolute;
  left: 50%;
  bottom: -25px;
  inline-size: 40px;
  transform: translateX(-50%) rotate(${({ toggleButton }) => (toggleButton ? '-90deg' : '90deg')});
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.secondary};
  }

  & svg {
    font-size: 16pt;
    font-weight: bold;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    right: -20px;
    left: inherit;
    bottom: 50%;
    transform: rotateY(${({ toggleButton }) => (toggleButton ? '180deg' : '0deg')});
  }
`;
