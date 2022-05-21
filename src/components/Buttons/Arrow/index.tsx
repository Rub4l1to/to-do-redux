import React, { FC, ReactNode } from 'react';

//* Styles
import * as Styled from './styles';

interface ArrrowProps {
  children: ReactNode;
  toggleButton: boolean;
  onClick?: () => void;
}

export const Arrow: FC<ArrrowProps> = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};
