import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/store';

const SignupForm = () => {
  const dispatch = useDispatch();
  const { isLoading, user, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = async (values) => {
    try {
      dispatch(signup(values));
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error);
    }
  };
  return (
    // <div>
    //   <h1>Sign Up</h1>
    //   {isLoading && <p>Loading..</p>}
    //   {user && <p>user: {user}</p>}
    //   {successMessage ? (
    //     <p>{successMessage}</p>
    //   ) : errorMessage ? (
    //     <p>{successMessage}</p>
    //   ) : (
    //     <></>
    //   )}
    //   <Formik
    //     initialValues={{ email: '', password: '', confirmPassword: '' }}
    //     validationSchema={validationSchema}
    //     onSubmit={(values) => {
    //       handleSubmit(values);
    //     }}
    //   >
    //     <Form>
    //       <label htmlFor="email">Email</label>
    //       <Field type="email" name="email" />
    //       <ErrorMessage name="email" component="div" />

    //       <label htmlFor="password">Password</label>
    //       <Field type="password" name="password" />
    //       <ErrorMessage name="password" component="div" />

    //       <label htmlFor="confirmPassword">Confirm Password</label>
    //       <Field type="password" name="confirmPassword" />
    //       <ErrorMessage name="confirmPassword" component="div" />

    //       <button type="submit">Submit</button>
    //     </Form>
    //   </Formik>
    // </div>

    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      {isLoading && <p>Loading..</p>}
      {user && <p>User: {user}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-xs italic"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
