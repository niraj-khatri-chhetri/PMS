import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useLogin } from './useLogin';

const CreateUpdate = () => {
  const {
    handleSubmit,
    handleChange,
    values,
    validationSchema,
    errors,
    setFieldValue,
    touched,
    handleBlur,
    authState,
  } = useLogin();
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-auto">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id="userEmail"
          name="email"
          type="email"
          label="E-mail"
          placeholder="Enter your email"
          values={values}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          isRequired={true}
        />

        <Input
          id="userPassword"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          values={values}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          isRequired={true}
        />
        <Button text="Login" isLoading={isLoading} />
      </form>
    </div>
  );
};

export default CreateUpdate;
