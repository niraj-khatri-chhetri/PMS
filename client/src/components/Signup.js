import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/store';

import Input from './Input/index';
import Button from './Button';

const SignupForm = () => {
  const dispatch = useDispatch();
  const { isLoading, user, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: { email: '', password: '', confirmPassword: '' },
    onSubmit: (values) => {
      dispatch(signup(values));
    },
  });

  // const validationSchema = Yup.object({
  //   email: Yup.string().email('Invalid email address').required('Required'),
  //   password: Yup.string()
  //     .min(8, 'Password must be at least 8 characters')
  //     .required('Required'),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //     .required('Required'),
  // });

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-auto">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      {isLoading && <p>Loading..</p>}
      {user && <p>User: {user}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <>
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
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            values={values}
            handleChange={handleChange}
            placeholder="Confirm your password"
          />
          {/* <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div> */}

          <Button text="Sign-up" isLoading={isLoading} />
        </form>
      </>
    </div>
  );
};

export default SignupForm;
