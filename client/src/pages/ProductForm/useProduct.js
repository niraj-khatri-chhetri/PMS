import { useEffect } from 'react';
import {
  create,
  fetchProduct,
  resetState,
  updateProduct,
} from '../../store/store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const useProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const { product, loading } = useSelector((state) => state.product);

  useEffect(() => {
    if (!productId) {
      dispatch(resetState(product));
      return;
    }
    dispatch(fetchProduct(productId));
  }, [productId]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues:
      Object.keys(product).length > 0
        ? {
            title: product?.title,
            price: product?.price,
            description: product?.description,
            file: '/static',
          }
        : { title: '', price: '', description: '', file: null },

    onSubmit: async (values, { resetForm }) => {
      if (Object.keys(product).length > 0) {
        dispatch(updateProduct({ data: values, productId }));
        return;
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
    productState: product,
    loading,
  };
};
