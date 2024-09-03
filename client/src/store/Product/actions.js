import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../api';
import { errorHandler } from '../Errors';

export const create = createAsyncThunk(
  'product/create',
  errorHandler(async (data, { rejectWithValue }) => {
    const response = await Api.post('admin/add-product', data);
    return response.data;
  })
);

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  errorHandler(async (data, { rejectWithValue }) => {
    const response = await Api.get('/products');
    return response.data;
  })
);

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await Api.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      console.log('🚀 ~ error:', error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  errorHandler(async ({ data, productId }, { rejectWithValue }) => {
    const response = await Api.put(`/admin/add-product/${productId}`, data);
    return response.data;
  })
);
