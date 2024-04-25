import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../api';
import { errorHandler } from '../Errors';

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await Api.post('/signup', userData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  errorHandler(async (userData, { rejectWithValue }) => {
    const response = await Api.post('/login', userData);
    return response.data;
  })
);
