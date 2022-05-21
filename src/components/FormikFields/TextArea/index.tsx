import React, { CSSProperties, FC } from 'react';

//* Formik
import { useField } from 'formik';

//* Styled Components
import * as Styled from './styles';

//* Components
import { Fields } from 'components/Shared';
import { ErrorMessage } from 'components';

interface TextAreaProps {
  name: string;
  noErrors?: boolean;
  placeholder?: string;
  style?: CSSProperties;
  label?: string;
  [x: string]: any;
}

export const TextArea: FC<TextAreaProps> = ({ noErrors, label, ...props }) => {
  const [field, meta] = useField(props);
  const hasErrors = meta.touched && meta.error !== undefined;

  return (
    <Styled.TextArea>
      {label && <Styled.InputLabel htmlFor={props.name}>{label}</Styled.InputLabel>}
      <Fields.TextAreaField
        {...{
          ...field,
          ...props,
          error: hasErrors,
        }}
      />
      {!noErrors && hasErrors && <ErrorMessage name={props.name} />}
    </Styled.TextArea>
  );
};
