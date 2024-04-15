import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from './Input';
import Button from './Button';

const ProductForm = () => {
  const {
    handleSubmit,
    handleChange,
    values,
    setFieldValue,
    validationSchema,
    errors,
  } = useFormik({
    initialValues: { title: '', price: '', description: '', file: null },
    onSubmit: (values) => {
      console.log('🚀 ~ productForm ~ values:', values);
    },
    //  validationSchema: Yup.object({
    //    email: Yup.string().email('Invalid email address').required('Required'),
    //    password: Yup.string()
    //      .min(8, 'Password must be at least 8 characters')
    //      .required('Required'),
    //  }),
  });

  const handleFileChange = (event) => {
    console.log('🚀 ~ handleFileChange ~ event:', event);
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
          values={values}
          handleChange={handleChange}
          placeholder="Enter product title"
        />

        <Input
          id="price"
          name="price"
          type="number"
          label="Price"
          values={values}
          handleChange={handleChange}
          placeholder="Enter the price"
        />
        <Input
          id="description"
          name="description"
          type="desc"
          label="Description"
          values={values}
          handleChange={handleChange}
          placeholder="Enter the Description"
        />

        {/* <input id='file' type="file" name="file" onChange={handleFileChange} /> */}
        <Input id="file" type="file" name="file" onChange={handleFileChange} />
        <Button text="Create" />
      </form>
    </div>
  );
};

export default ProductForm;
