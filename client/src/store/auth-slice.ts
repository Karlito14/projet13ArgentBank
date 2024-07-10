import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types/types';

const initialStateUser: UserState = {
  email: '',
  firstName: '',
  lastName: '',
  createdAt: '',
  updatedAt: '',
  id: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialStateUser,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
    logout: (state) => {
      state = initialStateUser;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
