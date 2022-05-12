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
  left: inherit;
  right: -20px;
  bottom: 50%;
  inline-size: 40px;
  transform: translateX(20%);
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
    transform: rotate(${({ toggleButton }) => (toggleButton ? '-180deg' : '0deg')});
  }
`;
