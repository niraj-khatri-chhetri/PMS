import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../store/store';

import Input from './Input';
import Button from './Button';

import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();

  const { isLoading, user, successMessage, errorMessage, token, userId } =
    useSelector((state) => state.auth);

  const { handleSubmit, handleChange, values, validationSchema, errors } =
    useFormik({
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

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-auto">
      <h1>Log in</h1>
      {isLoading && <>Loading...</>}
      {successMessage && <p>{successMessage}</p>}
      {user && <>{user.email}</>}
      <form onSubmit={handleSubmit}>
        <Input
          id="userEmail"
          name="email"
          type="email"
          label="E-mail"
          values={values}
          handleChange={handleChange}
          placeholder="Enter your email"
        />

        <Input
          id="userPassword"
          name="password"
          type="password"
          label="Password"
          values={values}
          handleChange={handleChange}
          placeholder="Enter your password"
        />
        <Button text="Login" isLoading={isLoading} />
      </form>
    </div>
  );
};

export default LoginForm;
