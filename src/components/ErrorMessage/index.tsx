import { ErrorMessage } from 'formik';
import React, { ReactNode } from 'react';
//* Icons
import { MdError } from 'react-icons/md';

//* Styled Components
import * as Styled from './styles';

interface ErrorMessageProps {
  name?: string;
  children?: string | ReactNode;
  [x: string]: any;
}

const ErrorMSG = ({ name = '', children }: ErrorMessageProps) =>
  children ? (
    <Styled.ErrorBase>{children}</Styled.ErrorBase>
  ) : (
    <Styled.ErrorMessage as="div">
      <MdError />
      <ErrorMessage name={name} component="span" />
    </Styled.ErrorMessage>
  );

export default ErrorMSG;
