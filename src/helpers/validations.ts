import * as Yup from 'yup';

export const FormSchema = Yup.object({
  name: Yup.string().required('Field required'),
  price: Yup.number().min(1, 'Price must be greater than 0').required('Field required'),
  amount: Yup.number().min(1, 'Price must be greater than 0').required('Field required'),
  description: Yup.string().required('Field required'),
});
