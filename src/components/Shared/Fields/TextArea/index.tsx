import React, { CSSProperties, FC } from 'react';

//* Styled Components
import * as Styled from './styles';

interface TextAreaProps {
  name: string;
  placeholder?: string;
  style?: CSSProperties;
  hasErrors?: boolean;
  [x: string]: any;
}

export const TextAreaField: FC<TextAreaProps> = ({ hasErrors, style, label, ...props }) => {
  return <Styled.InputTextArea error={hasErrors} {...props} />;
};
