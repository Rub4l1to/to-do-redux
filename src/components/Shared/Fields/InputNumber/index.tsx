import React, { CSSProperties, FC } from 'react';

//* Styled Components
import * as Styled from './styles';

interface InputNumberProps {
  name: string;
  placeholder?: string;
  style?: CSSProperties;
  hasErrors?: boolean;
  [x: string]: any;
}

export const InputNumberField: FC<InputNumberProps> = ({ hasErrors, style, label, ...props }) => {
  return <Styled.InputNumberField step="any" pattern="[0-9]*" error={hasErrors} {...props} />;
};
