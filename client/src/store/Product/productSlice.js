import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { create } from './actions';

const initialState = {
  loading: false,
  product: {},
  message: null,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(create.pending, (state) => {
        state.loading = true;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.product;
        state.message = action.payload.message;
      })
      .addCase(create.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default productSlice.reducer;
