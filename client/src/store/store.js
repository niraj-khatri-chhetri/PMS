import { configureStore } from '@reduxjs/toolkit';

import signupReducer from './Signup/signupSlice';

import { signup, login } from './Signup/actions';

const store = configureStore({
  reducer: {
    auth: signupReducer,
  },
});

export { signup, login };
export default store;
