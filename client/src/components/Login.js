import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../store/store';

import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();

  const { isLoading, user, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  console.log('🚀 ~ LoginForm ~ isLoading:', isLoading);
  console.log('🚀 ~ LoginForm ~ user:', user);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(login(values));
  };

  return (
    <div>
      <h1>Log in</h1>
      {isLoading && <>Loading...</>}
      {user && <>{user.email}</>}
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
