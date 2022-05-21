import React, { CSSProperties, FC } from 'react';

//* Formik
import { useField } from 'formik';

//* Components
import { ErrorMessage } from 'components';

//* Styled Components
import * as Styled from './styles';

interface InputTextProps {
  name: string;
  noErrors?: boolean;
  label?: string;
  placeholder?: string;
  style?: CSSProperties;
  [x: string]: any;
}

export const InputText: FC<InputTextProps> = ({ noErrors, style, label, ...props }) => {
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
