import React, { ReactNode } from 'react';

//* Styles
import * as Styled from './styles';

interface Props {
  children: ReactNode;
  toggleButton: boolean;
  onClick?: () => void;
}

const Button = ({ children, ...props }: Props) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

export default Button;
