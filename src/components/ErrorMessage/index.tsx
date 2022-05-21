import React, { FC, ReactNode } from 'react';

//* Icons
import { MdError } from 'react-icons/md';

//* Formik
import { ErrorMessage } from 'formik';

//* Styled Components
import * as Styled from './styles';

interface ErrorMessageProps {
  name?: string;
  children?: string | ReactNode;
  [x: string]: any;
}

export const ErrorMSG: FC<ErrorMessageProps> = ({ name = '', children }) =>
  children ? (
    <Styled.ErrorBase>{children}</Styled.ErrorBase>
  ) : (
    <Styled.ErrorMessage as="div">
      <MdError />
      <ErrorMessage name={name} component="span" />
    </Styled.ErrorMessage>
  );
