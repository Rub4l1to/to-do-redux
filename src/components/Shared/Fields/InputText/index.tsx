import React, { CSSProperties, FC } from 'react';

//* Styled Components
import * as Styled from './styles';

interface InputTextProps {
  name: string;
  placeholder?: string;
  style?: CSSProperties;
  hasErrors?: boolean;
  [x: string]: any;
}

export const InputTextField: FC<InputTextProps> = ({ hasErrors, style, label, ...props }) => {
  return <Styled.InputTextField error={hasErrors} {...props} />;
};
