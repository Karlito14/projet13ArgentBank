import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './auth-slice';
import userSlice from './user-slice';
import editNameSlice from './editProfile-slice';

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice,
    editName: editNameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
