import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TokenState } from '../types/types';

const initialStateToken: TokenState = {
  value: '',
};

export const authSlice = createSlice({
  name: 'tokenSlice',
  initialState: initialStateToken,
  reducers: {
    saveToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    deleteToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { saveToken, deleteToken } = authSlice.actions;
export default authSlice.reducer;
