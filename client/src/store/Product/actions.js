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
// export const create = createAsyncThunk(
//   'product/create',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await Api.post('admin/add-product', data);

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  errorHandler(async (data, { rejectWithValue }) => {
    const response = await Api.get('/products');
    return response.data;
  })
);
// export const fetchProducts = createAsyncThunk(
//   'product/fetchProducts',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await Api.get('/products');
//       return response.data;
//     } catch (error) {
//       console.log('🚀 ~ error:', error);
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );
