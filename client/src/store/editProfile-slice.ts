import { createSlice } from '@reduxjs/toolkit';

const initialStateEdit = {
  value: false,
};

export const editProfileSlice = createSlice({
  name: 'editProfileSlice',
  initialState: initialStateEdit,
  reducers: {
    edit: (state) => {
      state.value = true;
    },

    cancelEdit: (state) => {
      state.value = false;
    },
  },
});

export const { edit, cancelEdit } = editProfileSlice.actions;
export default editProfileSlice.reducer;
