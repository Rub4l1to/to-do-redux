import React, { CSSProperties } from 'react';

//* Formik
import { useField } from 'formik';

//* Components
import { ErrorMessage } from 'components';

//* Styled Components
import * as Styled from './styles';

interface Props {
  name: string;
  noErrors?: boolean;
  label?: string;
  placeholder?: string;
  style?: CSSProperties;
  [x: string]: any;
}

const InputText = ({ noErrors, style, label, ...props }: Props) => {
  const [field, meta] = useField(props);
  const hasErrors = meta.touched && meta.error !== undefined;

  return (
    <Styled.InputText>
      <Styled.InputLabel htmlFor={props.name}>{label}</Styled.InputLabel>
      <Styled.InputTextField style={style} error={hasErrors} {...field} {...props} />
      {!noErrors && hasErrors && <ErrorMessage name={props.name} />}
    </Styled.InputText>
  );
};

export default InputText;
