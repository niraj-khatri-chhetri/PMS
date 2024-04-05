import { createSlice } from '@reduxjs/toolkit';
import { signup } from './actions';

const initialState = {
  user: null,
  isLoading: false,
  successMessage: null,
  errorMessage: null,
};

const signupSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.successMessage = action.payload.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default signupSlice.reducer;
