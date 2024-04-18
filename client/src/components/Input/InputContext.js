import React, { createContext, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log('Hey I  am Values from the context=>', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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
  };

  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = () => useContext(InputContext);
