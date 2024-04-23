import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { create, fetchProducts } from './actions';

const initialState = {
  loading: false,
  product: {},
  message: null,
  error: null,
  products: [],
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
        state.product = action.payload.result;
        state.message = action.payload.message;
      })
      .addCase(create.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });

    //fetchig products
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log('🚀 ~ .addCase ~ action:', action);
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default productSlice.reducer;
