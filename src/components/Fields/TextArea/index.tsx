import React, { CSSProperties } from 'react';

//* Formik
import { useField } from 'formik';

//* Styled Components
import * as Styled from './styles';

interface Props {
  name: string;
  noErrors?: boolean;
  placeholder?: string;
  style?: CSSProperties;
  label: string;
  [x: string]: any;
}

const TextArea = ({ noErrors, style, label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <Styled.TextArea>
      <Styled.InputLabel htmlFor={props.name}>{label}</Styled.InputLabel>
      <Styled.InputTextArea style={style} {...field} {...props} />
    </Styled.TextArea>
  );
};

export default TextArea;
