import { configureStore } from '@reduxjs/toolkit';

import signupReducer from './Signup/signupSlice';
import productReducer from './Product/productSlice';

import { signup, login } from './Signup/actions';
import { create } from './Product/actions';

const store = configureStore({
  reducer: {
    auth: signupReducer,
    product: productReducer,
  },
});

export { signup, login, create };
export default store;
