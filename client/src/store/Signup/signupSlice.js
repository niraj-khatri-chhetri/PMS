import { createSlice } from '@reduxjs/toolkit';
import { signup, login } from './actions';

const initialState = {
  user: null,
  isLoading: false,
  successMessage: null,
  errorMessage: null,
  token: null,
  userId: null,
};

const signupSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //signup builder
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

    //login builder

    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.successMessage = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default signupSlice.reducer;
