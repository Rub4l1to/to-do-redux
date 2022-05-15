import React from 'react';
import { Formik } from 'formik';

//* Components
import { Button, InputText, InputNumber, TextArea } from 'components';

//* Helpers
import { FormSchema } from 'helpers/validations';

//* Styled Components
import * as Styled from './styles';

interface IProps {
  name: string;
  price: number;
  description: string;
  amount: number;
}

export const FormCreator = () => {
  return (
    <Formik
      initialValues={
        {
          name: '',
          price: 0,
          description: '',
          amount: 0,
        } as IProps
      }
      onSubmit={(values) => console.log(values)}
      validationSchema={FormSchema}
    >
      {({ handleSubmit, isValid, dirty }) => (
        <Styled.MainForm onSubmit={handleSubmit}>
          <InputText name="name" label="Name" />
          <InputNumber name="price" label="Price" />
          <InputNumber name="amount" label="Amount" />
          <TextArea name="description" label="Details" />
          <Button type="submit" disabled={!isValid || !dirty}>
            Add item
          </Button>
        </Styled.MainForm>
      )}
    </Formik>
  );
};

export default FormCreator;
