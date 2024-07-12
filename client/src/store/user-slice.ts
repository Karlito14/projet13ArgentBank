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

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    stateUser : initialUser
  },
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.stateUser = action.payload;
    },
    logout: (state) => {
      state.stateUser = {...initialUser};
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
