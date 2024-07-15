import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserState, UpdateUser } from '../types/types';

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
    stateUser: initialUser,
  },
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.stateUser = action.payload;
    },
    logout: (state) => {
      state.stateUser = { ...initialUser };
    },
    updateUser: (state, action: PayloadAction<UpdateUser>) => {
      state.stateUser = {
        ...state.stateUser,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
