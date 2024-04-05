import { configureStore } from '@reduxjs/toolkit';

import signupReducer from './Signup/signupSlice';

import { signup } from './Signup/actions';

const store = configureStore({
  reducer: {
    auth: signupReducer,
  },
});

export { signup };
export default store;
