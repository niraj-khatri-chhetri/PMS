import React from 'react';

import Input from './Input';
import Button from './Button';

import { useInputContext } from './Input/InputContext';

const ProductForm = () => {
  const { handleSubmit, setFieldValue, productState } = useInputContext();
  const { product, loading, error, message } = productState;

  const handleFileChange = (event) => {
    setFieldValue('file', event.currentTarget.files[0]);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-auto">
      <h1>Add product</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id="title"
          name="title"
          type="text"
          label="Title"
          placeholder="Enter product title"
          isRequired={true}
        />

        <Input
          id="price"
          name="price"
          type="number"
          label="Price"
          placeholder="Enter the price"
          isRequired={true}
        />
        <Input
          id="description"
          name="description"
          type="textarea"
          label="Description"
          placeholder="Enter the Description"
          isRequired={true}
        />

        <Input id="file" type="file" name="file" onChange={handleFileChange} />
        <Button text="Create" loading={loading} />
      </form>
    </div>
  );
};

export default ProductForm;
