import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { create } from '../store/store';

import Input from './Input';
import Button from './Button';

const ProductForm = () => {
  const dispatch = useDispatch();
  const { product, loading, error, message } = useSelector(
    (state) => state.product
  );

  const formik = useFormik({
    initialValues: { title: '', price: '', description: '', file: null },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        create({
          ...values,
          file: values.file.name,
        })
      );

      if (!loading) resetForm();
    },
    validationSchema: Yup.object({
      title: Yup.string().required().label('Title'),
      price: Yup.number()
        .min(1, 'Price cannot be less than 1')
        .required()
        .label('Price'),

      description: Yup.string()
        .required()
        .min(3, 'Should be at least three characters')
        .label('Description'),
      file: Yup.string().required().label('File'),
    }),
  });

  const { handleSubmit, handleChange, values, setFieldValue, errors } = formik;

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
          values={values}
          handleChange={handleChange}
          placeholder="Enter product title"
          errors={errors}
          isRequired={true}
        />

        <Input
          id="price"
          name="price"
          type="number"
          label="Price"
          values={values}
          handleChange={handleChange}
          placeholder="Enter the price"
          errors={errors}
          isRequired={true}
        />
        <Input
          id="description"
          name="description"
          type="textarea"
          label="Description"
          values={values}
          handleChange={handleChange}
          placeholder="Enter the Description"
          errors={errors}
          isRequired={true}
        />

        {/* <input id='file' type="file" name="file" onChange={handleFileChange} /> */}
        <Input id="file" type="file" name="file" onChange={handleFileChange} />
        <Button text="Create" loading={loading} />
      </form>
    </div>
  );
};

export default ProductForm;

// #################
