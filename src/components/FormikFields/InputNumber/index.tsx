import React, { CSSProperties, FC } from 'react';

//* Formik
import { useField } from 'formik';

//* Components
import { Fields } from 'components/Shared';
import { ErrorMessage } from 'components';

//* Styled Components
import * as Styled from './styles';

interface InputNumberProps {
  name: string;
  noErrors?: boolean;
  placeholder?: string;
  style?: CSSProperties;
  label: string;
  disabled?: boolean;
  [x: string]: any;
}

export const InputNumber: FC<InputNumberProps> = ({ noErrors, style, label, ...props }) => {
  const [field, meta] = useField(props);
  const hasErrors = meta.touched && meta.error !== undefined;

  return (
    <Styled.InputNumber>
      <Styled.InputLabel htmlFor={props.name}>{label}</Styled.InputLabel>
      <Fields.InputNumberField
        type="number"
        {...{
          ...field,
          ...props,
          error: hasErrors,
        }}
      />
      {!noErrors && hasErrors && <ErrorMessage name={props.name} />}
    </Styled.InputNumber>
  );
};
