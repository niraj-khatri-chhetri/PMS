import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
const Form = () => {
  const [responseProduct, setResponseProduct] = useState({});

  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      description: '',
      image: '',
    },
    onSubmit: async (values) => {
      console.log('🚀 ~ onSubmit: ~ values:', values);
      try {
        const config = {
          headers: { 'Content-Type': 'application/json' },
        };
        const response = await axios.post(
          'http://localhost:5000/admin/add-product/',
          config,
          values
        );

        console.log('#########', response);
      } catch (error) {
        console.log('🚀 ~ onSubmit: ~ error:', error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {/* <label htmlFor="image">image</label>
      <input
        id="image"
        name="image"
        type="file"
        onChange={formik.handleChange}
        value={formik.values.title}
      /> */}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.description}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
