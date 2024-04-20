import React, { createContext, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { create } from '../../store/store';

const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const formik = useFormik({
    initialValues: { title: '', price: '', description: '', file: null },
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

  const {
    handleSubmit,
    handleChange,
    values,
    setFieldValue,
    errors,
    touched,
    handleBlur,
  } = formik;

  const contextValue = {
    handleSubmit,
    handleChange,
    values,
    setFieldValue,
    errors,
    touched,
    handleBlur,
    productState,
  };

  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = () => useContext(InputContext);
