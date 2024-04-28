import { create } from '../../store/store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../api';

export const useProduct = (formData) => {
  const dispatch = useDispatch();
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
    onSubmit: async (values, { resetForm }) => {
      if (formData) {
        const response = await api.put(`/admin/add-product/${formData?.id}`);
      }
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
    productState: formData,
  };
};
