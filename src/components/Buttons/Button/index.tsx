import React from 'react';

//* Styles
import * as Styled from './styles';

interface Props {
  children: string;
  disabled: boolean;
  type: 'submit' | 'button';
}

const Button = ({ children, disabled, ...props }: Props) => {
  return (
    <Styled.Button {...props} disable={disabled}>
      {children}
    </Styled.Button>
  );
};

export default Button;
