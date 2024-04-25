import { create } from '../../store/store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

export const useProduct = (formData) => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData
      ? {
          title: formData?.title,
          price: formData?.price,
          description: formData?.description,
          file: null,
        }
      : { title: '', price: '', description: '', file: null },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        create({
          ...values,
          file: values.file.name,
        })
      );

      resetForm();
    },
    validationSchema: Yup.object({
      title: Yup.string().required().label('Title'),
      price: Yup.number()
        .min(1, 'Price cannot be less than 1')
        .required()
        .label('Price'),

      description: Yup.string()
        .required()
        .min(3, 'Should be at least three characters')
        .label('Description'),
      file: Yup.string().required().label('File'),
    }),
  });

  return {
    formik,
    productState,
  };
};
