import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const create = createAsyncThunk(
  'product/create',
  async (data, { rejectWithValue }) => {
    console.log('🚀 ~ data:', data);
    try {
      const response = await axios.post(
        'http://localhost:5000/admin/add-product',
        data
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
