import React, { CSSProperties, FC } from 'react';

//* Formik
import { useField } from 'formik';

//* Styled Components
import * as Styled from './styles';

interface TextAreaProps {
  name: string;
  noErrors?: boolean;
  placeholder?: string;
  style?: CSSProperties;
  label: string;
  [x: string]: any;
}

export const TextArea: FC<TextAreaProps> = ({ noErrors, style, label, ...props }) => {
  const [field] = useField(props);

  return (
    <Styled.TextArea>
      <Styled.InputLabel htmlFor={props.name}>{label}</Styled.InputLabel>
      <Styled.InputTextArea style={style} {...field} {...props} />
    </Styled.TextArea>
  );
};
