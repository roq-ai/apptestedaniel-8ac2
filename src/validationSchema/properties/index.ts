import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  brokerage_id: yup.string().nullable(),
});
