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
  top: 5%;
  right: -20px;
  inline-size: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  transform: ${({ toggleButton }) => (toggleButton ? 'rotateY(0)' : 'rotateY(180deg)')};

  &:hover {
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.secondary};
  }

  & svg {
    font-size: 16px;
    font-weight: bold;
  }
`;
