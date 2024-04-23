import React, { createContext, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/store';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      dispatch(login(values));
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
    }),
  });

  const {
    handleSubmit,
    handleChange,
    values,
    validationSchema,
    errors,
    setFieldValue,
    touched,
    handleBlur,
  } = formik;

  const contextValue = {
    handleSubmit,
    handleChange,
    values,
    validationSchema,
    errors,
    setFieldValue,
    touched,
    handleBlur,
    authState,
  };
  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
