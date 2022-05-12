import React from 'react';

//* Styles
import * as Styled from './styles';

interface Props {
  children: string;
  disable: boolean;
}

const Button = ({ children, disable }: Props) => {
  return <Styled.Button disabled={disable}>{children}</Styled.Button>;
};

export default Button;
