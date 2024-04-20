import React from 'react';
import { InputProvider } from './InputContext';
import CreateUpdate from './CreateUpdate';

const Index = () => {
  return (
    <InputProvider>
      <CreateUpdate />
    </InputProvider>
  );
};

export default Index;
