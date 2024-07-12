import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './auth-slice';
import authSlice from './user-slice';

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
