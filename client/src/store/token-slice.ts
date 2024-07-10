import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TokenState } from '../types/types';

const initialStateToken: TokenState = {
  value: '',
};

export const tokenSlice = createSlice({
  name: 'tokenSlice',
  initialState: initialStateToken,
  reducers: {
    saveToken: (state, action: PayloadAction<string>) => {
      console.log(action)
      state.value = action.payload;
    },
    deleteToken: (state) => {
      state.value = '';
    },
  },
});

export const { saveToken, deleteToken } = tokenSlice.actions;
export default tokenSlice.reducer;
