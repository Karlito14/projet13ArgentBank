import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types/types';

const initialUser: UserState = {
  email: '',
  firstName: '',
  lastName: '',
  createdAt: '',
  updatedAt: '',
  id: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    initialStateUser : initialUser
  },
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.initialStateUser = action.payload;
    },
    logout: (state) => {
      state.initialStateUser = {...initialUser};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
