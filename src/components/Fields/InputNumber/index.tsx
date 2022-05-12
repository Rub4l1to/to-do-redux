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
  placeholder?: string;
  style?: CSSProperties;
  label: string;
  [x: string]: any;
}

const InputNumber = ({ noErrors, style, label, ...props }: Props) => {
  const [field, meta] = useField(props);
  const hasErrors = meta.touched && meta.error !== undefined;

  return (
    <Styled.InputNumber>
      <Styled.InputLabel htmlFor={props.name}>{label}</Styled.InputLabel>
      <Styled.InputNumberField type="number" style={style} error={hasErrors} {...field} {...props} />
      {!noErrors && hasErrors && <ErrorMessage name={props.name} />}
    </Styled.InputNumber>
  );
};

export default InputNumber;
