import React, { FC } from 'react';
import { Formik } from 'formik';

//* Components
import { Button } from 'components/Buttons';
import { InputText, InputNumber, TextArea } from 'components/FormikFields';

//* Helpers
import { FormSchema } from 'helpers/validations';

//* Styled Components
import * as Styled from './styles';

//* Redux
import { useAppDispatch } from 'redux/hooks';
import { addItem } from 'redux/slices/todos';

export interface FormCreatorModel {
  name: string;
  price: number;
  description: string;
  amount: number;
}

export const FormCreator: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={
        {
          name: '',
          price: 0,
          description: '',
          amount: 0,
        } as FormCreatorModel
      }
      onSubmit={(values, { resetForm }) => {
        dispatch(addItem(values));
        resetForm();
      }}
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
