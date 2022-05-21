import React, { FC } from 'react';

//* Styles
import * as Styled from './styles';

interface ButtonProps {
  children: string;
  disabled: boolean;
  type: 'submit' | 'button';
}

export const Button: FC<ButtonProps> = ({ children, disabled, ...props }) => {
  return (
    <Styled.Button {...props} disable={disabled}>
      {children}
    </Styled.Button>
  );
};
