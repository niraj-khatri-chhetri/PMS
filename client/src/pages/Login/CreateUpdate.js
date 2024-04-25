import React from 'react';
import styled from 'styled-components';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useLogin } from './useLogin';

const StyledDiv = styled.div`
  max-width: 28rem;
  margin: auto;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.375rem;
  padding: 2rem 2.5rem 2.5rem;
  margin-bottom: 1rem;
  margin-top: 3rem;
`;

const CreateUpdate = () => {
  const { formik, authState } = useLogin();
  const { handleSubmit } = formik;
  const { isLoading } = authState;

  return (
    <StyledDiv>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id="userEmail"
          name="email"
          type="email"
          label="E-mail"
          placeholder="Enter your email"
          formik={formik}
        />

        <Input
          id="userPassword"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          formik={formik}
        />
        <Button text="Login" isLoading={isLoading} />
      </form>
    </StyledDiv>
  );
};

export default CreateUpdate;
